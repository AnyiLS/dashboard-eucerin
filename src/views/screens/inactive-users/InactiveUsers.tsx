import useControllers from "controllers";
import React from "react";
import useViews from "views";
import moment from 'moment';
import { Option, Select } from "@material-tailwind/react";

const InactiveUsers: React.FC = (): JSX.Element => {
  /** Views */
  const { useComponents } = useViews();
  const { Table, Button } = useComponents();

  /** Controllers */
  const {useScreensHooks} = useControllers();
  const {useInactiveUsers, useActiveUsers} = useScreensHooks();
  const {courses} = useActiveUsers();
  const {headings, users, handleActiveUser, handleGetUsers} = useInactiveUsers();

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
                    <p style={{ color: item.status?.color_status }} className="font-bold text-[13px]">{item.status?.translation_status}</p>
                ),
                options: (item: any) => (
                    <Button 
                        color="green" 
                        text="white"
                        onClick={() => handleActiveUser(item.id)}
                    >
                        Activar usuario
                    </Button>
                )
            }}
        </Table>
    </React.Fragment>
  );
};

export default InactiveUsers;
