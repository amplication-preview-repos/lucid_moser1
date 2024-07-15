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
import { StudentsController } from "../students.controller";
import { StudentsService } from "../students.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  firstName: "exampleFirstName",
  lastName: "exampleLastName",
  phoneNumber: "examplePhoneNumber",
  address: "exampleAddress",
  dateOfBirth: new Date(),
  email: "exampleEmail",
  enrollmentNumber: "exampleEnrollmentNumber",
  rollNumber: "exampleRollNumber",
  registrationNumber: "exampleRegistrationNumber",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  firstName: "exampleFirstName",
  lastName: "exampleLastName",
  phoneNumber: "examplePhoneNumber",
  address: "exampleAddress",
  dateOfBirth: new Date(),
  email: "exampleEmail",
  enrollmentNumber: "exampleEnrollmentNumber",
  rollNumber: "exampleRollNumber",
  registrationNumber: "exampleRegistrationNumber",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    firstName: "exampleFirstName",
    lastName: "exampleLastName",
    phoneNumber: "examplePhoneNumber",
    address: "exampleAddress",
    dateOfBirth: new Date(),
    email: "exampleEmail",
    enrollmentNumber: "exampleEnrollmentNumber",
    rollNumber: "exampleRollNumber",
    registrationNumber: "exampleRegistrationNumber",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  firstName: "exampleFirstName",
  lastName: "exampleLastName",
  phoneNumber: "examplePhoneNumber",
  address: "exampleAddress",
  dateOfBirth: new Date(),
  email: "exampleEmail",
  enrollmentNumber: "exampleEnrollmentNumber",
  rollNumber: "exampleRollNumber",
  registrationNumber: "exampleRegistrationNumber",
};

const service = {
  createStudents() {
    return CREATE_RESULT;
  },
  studentsItems: () => FIND_MANY_RESULT,
  students: ({ where }: { where: { id: string } }) => {
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

describe("Students", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StudentsService,
          useValue: service,
        },
      ],
      controllers: [StudentsController],
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

  test("POST /students", async () => {
    await request(app.getHttpServer())
      .post("/students")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        dateOfBirth: CREATE_RESULT.dateOfBirth.toISOString(),
      });
  });

  test("GET /students", async () => {
    await request(app.getHttpServer())
      .get("/students")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          dateOfBirth: FIND_MANY_RESULT[0].dateOfBirth.toISOString(),
        },
      ]);
  });

  test("GET /students/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/students"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /students/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/students"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        dateOfBirth: FIND_ONE_RESULT.dateOfBirth.toISOString(),
      });
  });

  test("POST /students existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/students")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        dateOfBirth: CREATE_RESULT.dateOfBirth.toISOString(),
      })
      .then(function () {
        agent
          .post("/students")
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
