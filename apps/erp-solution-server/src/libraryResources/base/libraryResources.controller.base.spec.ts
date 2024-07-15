import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { LibraryResourcesController } from "../libraryResources.controller";
import { LibraryResourcesService } from "../libraryResources.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  author: "exampleAuthor",
  isbn: "exampleIsbn",
  publishedDate: new Date(),
  title: "exampleTitle",
  availableCopies: 42,
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  author: "exampleAuthor",
  isbn: "exampleIsbn",
  publishedDate: new Date(),
  title: "exampleTitle",
  availableCopies: 42,
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    author: "exampleAuthor",
    isbn: "exampleIsbn",
    publishedDate: new Date(),
    title: "exampleTitle",
    availableCopies: 42,
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  author: "exampleAuthor",
  isbn: "exampleIsbn",
  publishedDate: new Date(),
  title: "exampleTitle",
  availableCopies: 42,
};

const service = {
  createLibraryResources() {
    return CREATE_RESULT;
  },
  libraryResourcesItems: () => FIND_MANY_RESULT,
  libraryResources: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("LibraryResources", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LibraryResourcesService,
          useValue: service,
        },
      ],
      controllers: [LibraryResourcesController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /libraryResources", async () => {
    await request(app.getHttpServer())
      .post("/libraryResources")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        publishedDate: CREATE_RESULT.publishedDate.toISOString(),
      });
  });

  test("GET /libraryResources", async () => {
    await request(app.getHttpServer())
      .get("/libraryResources")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          publishedDate: FIND_MANY_RESULT[0].publishedDate.toISOString(),
        },
      ]);
  });

  test("GET /libraryResources/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/libraryResources"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /libraryResources/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/libraryResources"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        publishedDate: FIND_ONE_RESULT.publishedDate.toISOString(),
      });
  });

  test("POST /libraryResources existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/libraryResources")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        publishedDate: CREATE_RESULT.publishedDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/libraryResources")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
