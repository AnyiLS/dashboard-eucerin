import useControllers from "controllers";
import React from "react";
import useViews from "views";
import moment from 'moment';

const InactiveUsers: React.FC = (): JSX.Element => {
  /** Views */
  const { useComponents } = useViews();
  const { Table, Button } = useComponents();

  /** Controllers */
  const {useScreensHooks} = useControllers();
  const {useInactiveUsers} = useScreensHooks();
  const {headings, users, handleActiveUser} = useInactiveUsers();
  
  return (
    <React.Fragment>
        <Table headings={headings} data={users}>
            {{
                created_at: (item: any) => (
                    <p>{moment(item.created_at).format('YYYY-MM-DD H:mm:ss')}</p>
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
