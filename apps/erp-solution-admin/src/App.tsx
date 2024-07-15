import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StudentsList } from "./students/StudentsList";
import { StudentsCreate } from "./students/StudentsCreate";
import { StudentsEdit } from "./students/StudentsEdit";
import { StudentsShow } from "./students/StudentsShow";
import { ParentsList } from "./parents/ParentsList";
import { ParentsCreate } from "./parents/ParentsCreate";
import { ParentsEdit } from "./parents/ParentsEdit";
import { ParentsShow } from "./parents/ParentsShow";
import { LibraryResourcesList } from "./libraryResources/LibraryResourcesList";
import { LibraryResourcesCreate } from "./libraryResources/LibraryResourcesCreate";
import { LibraryResourcesEdit } from "./libraryResources/LibraryResourcesEdit";
import { LibraryResourcesShow } from "./libraryResources/LibraryResourcesShow";
import { CoursesList } from "./courses/CoursesList";
import { CoursesCreate } from "./courses/CoursesCreate";
import { CoursesEdit } from "./courses/CoursesEdit";
import { CoursesShow } from "./courses/CoursesShow";
import { MeetingsList } from "./meetings/MeetingsList";
import { MeetingsCreate } from "./meetings/MeetingsCreate";
import { MeetingsEdit } from "./meetings/MeetingsEdit";
import { MeetingsShow } from "./meetings/MeetingsShow";
import { NotificationsList } from "./notifications/NotificationsList";
import { NotificationsCreate } from "./notifications/NotificationsCreate";
import { NotificationsEdit } from "./notifications/NotificationsEdit";
import { NotificationsShow } from "./notifications/NotificationsShow";
import { FinancialInformationList } from "./financialInformation/FinancialInformationList";
import { FinancialInformationCreate } from "./financialInformation/FinancialInformationCreate";
import { FinancialInformationEdit } from "./financialInformation/FinancialInformationEdit";
import { FinancialInformationShow } from "./financialInformation/FinancialInformationShow";
import { FacultyList } from "./faculty/FacultyList";
import { FacultyCreate } from "./faculty/FacultyCreate";
import { FacultyEdit } from "./faculty/FacultyEdit";
import { FacultyShow } from "./faculty/FacultyShow";
import { AssignmentsList } from "./assignments/AssignmentsList";
import { AssignmentsCreate } from "./assignments/AssignmentsCreate";
import { AssignmentsEdit } from "./assignments/AssignmentsEdit";
import { AssignmentsShow } from "./assignments/AssignmentsShow";
import { ForumPostsList } from "./forumPosts/ForumPostsList";
import { ForumPostsCreate } from "./forumPosts/ForumPostsCreate";
import { ForumPostsEdit } from "./forumPosts/ForumPostsEdit";
import { ForumPostsShow } from "./forumPosts/ForumPostsShow";
import { MessagesList } from "./messages/MessagesList";
import { MessagesCreate } from "./messages/MessagesCreate";
import { MessagesEdit } from "./messages/MessagesEdit";
import { MessagesShow } from "./messages/MessagesShow";
import { ExamsList } from "./exams/ExamsList";
import { ExamsCreate } from "./exams/ExamsCreate";
import { ExamsEdit } from "./exams/ExamsEdit";
import { ExamsShow } from "./exams/ExamsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ERP Solution"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Students"
          list={StudentsList}
          edit={StudentsEdit}
          create={StudentsCreate}
          show={StudentsShow}
        />
        <Resource
          name="Parents"
          list={ParentsList}
          edit={ParentsEdit}
          create={ParentsCreate}
          show={ParentsShow}
        />
        <Resource
          name="LibraryResources"
          list={LibraryResourcesList}
          edit={LibraryResourcesEdit}
          create={LibraryResourcesCreate}
          show={LibraryResourcesShow}
        />
        <Resource
          name="Courses"
          list={CoursesList}
          edit={CoursesEdit}
          create={CoursesCreate}
          show={CoursesShow}
        />
        <Resource
          name="Meetings"
          list={MeetingsList}
          edit={MeetingsEdit}
          create={MeetingsCreate}
          show={MeetingsShow}
        />
        <Resource
          name="Notifications"
          list={NotificationsList}
          edit={NotificationsEdit}
          create={NotificationsCreate}
          show={NotificationsShow}
        />
        <Resource
          name="FinancialInformation"
          list={FinancialInformationList}
          edit={FinancialInformationEdit}
          create={FinancialInformationCreate}
          show={FinancialInformationShow}
        />
        <Resource
          name="Faculty"
          list={FacultyList}
          edit={FacultyEdit}
          create={FacultyCreate}
          show={FacultyShow}
        />
        <Resource
          name="Assignments"
          list={AssignmentsList}
          edit={AssignmentsEdit}
          create={AssignmentsCreate}
          show={AssignmentsShow}
        />
        <Resource
          name="ForumPosts"
          list={ForumPostsList}
          edit={ForumPostsEdit}
          create={ForumPostsCreate}
          show={ForumPostsShow}
        />
        <Resource
          name="Messages"
          list={MessagesList}
          edit={MessagesEdit}
          create={MessagesCreate}
          show={MessagesShow}
        />
        <Resource
          name="Exams"
          list={ExamsList}
          edit={ExamsEdit}
          create={ExamsCreate}
          show={ExamsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
