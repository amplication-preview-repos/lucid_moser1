/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Courses } from "./Courses";
import { CoursesCountArgs } from "./CoursesCountArgs";
import { CoursesFindManyArgs } from "./CoursesFindManyArgs";
import { CoursesFindUniqueArgs } from "./CoursesFindUniqueArgs";
import { CreateCoursesArgs } from "./CreateCoursesArgs";
import { UpdateCoursesArgs } from "./UpdateCoursesArgs";
import { DeleteCoursesArgs } from "./DeleteCoursesArgs";
import { AssignmentsFindManyArgs } from "../../assignments/base/AssignmentsFindManyArgs";
import { Assignments } from "../../assignments/base/Assignments";
import { ExamsFindManyArgs } from "../../exams/base/ExamsFindManyArgs";
import { Exams } from "../../exams/base/Exams";
import { Faculty } from "../../faculty/base/Faculty";
import { CoursesService } from "../courses.service";
@graphql.Resolver(() => Courses)
export class CoursesResolverBase {
  constructor(protected readonly service: CoursesService) {}

  async _coursesItemsMeta(
    @graphql.Args() args: CoursesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Courses])
  async coursesItems(
    @graphql.Args() args: CoursesFindManyArgs
  ): Promise<Courses[]> {
    return this.service.coursesItems(args);
  }

  @graphql.Query(() => Courses, { nullable: true })
  async courses(
    @graphql.Args() args: CoursesFindUniqueArgs
  ): Promise<Courses | null> {
    const result = await this.service.courses(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Courses)
  async createCourses(
    @graphql.Args() args: CreateCoursesArgs
  ): Promise<Courses> {
    return await this.service.createCourses({
      ...args,
      data: {
        ...args.data,

        faculty: args.data.faculty
          ? {
              connect: args.data.faculty,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Courses)
  async updateCourses(
    @graphql.Args() args: UpdateCoursesArgs
  ): Promise<Courses | null> {
    try {
      return await this.service.updateCourses({
        ...args,
        data: {
          ...args.data,

          faculty: args.data.faculty
            ? {
                connect: args.data.faculty,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Courses)
  async deleteCourses(
    @graphql.Args() args: DeleteCoursesArgs
  ): Promise<Courses | null> {
    try {
      return await this.service.deleteCourses(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Assignments], { name: "assignmentsItems" })
  async findAssignmentsItems(
    @graphql.Parent() parent: Courses,
    @graphql.Args() args: AssignmentsFindManyArgs
  ): Promise<Assignments[]> {
    const results = await this.service.findAssignmentsItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Exams], { name: "examsItems" })
  async findExamsItems(
    @graphql.Parent() parent: Courses,
    @graphql.Args() args: ExamsFindManyArgs
  ): Promise<Exams[]> {
    const results = await this.service.findExamsItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Faculty, {
    nullable: true,
    name: "faculty",
  })
  async getFaculty(@graphql.Parent() parent: Courses): Promise<Faculty | null> {
    const result = await this.service.getFaculty(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
