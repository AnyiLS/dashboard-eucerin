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
  const {useActiveUsers} = useScreensHooks();
  const {headings, users} = useActiveUsers();
  
  return (
    <React.Fragment>
        <Table headings={headings} data={users}>
            {{
                created_at: (item: any) => (
                    <p>{moment(item.created_at).format('YYYY-MM-DD H:mm:ss')}</p>
                )
            }}
        </Table>
    </React.Fragment>
  );
};

export default InactiveUsers;
