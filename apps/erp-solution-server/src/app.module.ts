import { Module } from "@nestjs/common";
import { StudentsModule } from "./students/students.module";
import { ParentsModule } from "./parents/parents.module";
import { LibraryResourcesModule } from "./libraryResources/libraryResources.module";
import { CoursesModule } from "./courses/courses.module";
import { MeetingsModule } from "./meetings/meetings.module";
import { NotificationsModule } from "./notifications/notifications.module";
import { FinancialInformationModule } from "./financialInformation/financialInformation.module";
import { FacultyModule } from "./faculty/faculty.module";
import { AssignmentsModule } from "./assignments/assignments.module";
import { ForumPostsModule } from "./forumPosts/forumPosts.module";
import { MessagesModule } from "./messages/messages.module";
import { ExamsModule } from "./exams/exams.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    StudentsModule,
    ParentsModule,
    LibraryResourcesModule,
    CoursesModule,
    MeetingsModule,
    NotificationsModule,
    FinancialInformationModule,
    FacultyModule,
    AssignmentsModule,
    ForumPostsModule,
    MessagesModule,
    ExamsModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
