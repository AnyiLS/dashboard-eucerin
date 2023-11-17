import useControllers from "controllers";
import React from "react";
import useViews from "views";
import moment from "moment";
import { Select, Option } from "@material-tailwind/react";

const InactiveUsers: React.FC = (): JSX.Element => {
  /** Views */
  const { useComponents } = useViews();
  const { Table, Button } = useComponents();

  /** Controllers */
  const { useScreensHooks } = useControllers();
  const { useActiveUsers } = useScreensHooks();
  const { headings, users, courses, handleGetUsers } = useActiveUsers();

  console.log(users)

  return (
    <React.Fragment>
      <Select onChange={(e: any) => handleGetUsers(e)} label="Curso">
        {courses.courses ? courses.courses.map((item: any, index: number) => (
          <Option value={item.id} key={index}>{item.label}</Option>
        )) : courses.map((item: any, index: number) => (
          <Option value={item.id} key={index}>{item.label}</Option>
        ))}
      </Select>
      <Table headings={headings} data={users}>
        {{
          status: (item: any) => (
            <p style={{ color: item.status.color_status }} className="font-bold text-[13px]">{item.status.translation_status}</p>
          ),
        }}
      </Table>
    </React.Fragment>
  );
};

export default InactiveUsers;
