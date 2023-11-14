import useControllers from "controllers";
import React from "react";
import useViews from "views";
import moment from "moment";

const Worlds: React.FC = (): JSX.Element => {
  /** Views */
  const { useComponents } = useViews();
  const { Table, Button } = useComponents();

  /** Controllers */
  const { useScreensHooks } = useControllers();
  const { useWorlds } = useScreensHooks();
  const { headings, users, handleActiveUser } = useWorlds();

  return (
    <React.Fragment>
      <Table headings={headings} data={users}>
        {{
          name: (item: any) => (
            <p>
              {item.user ? item.user.name : 'Usuario'}
            </p>
          ),
          email: (item: any) => (
            <p>
              {item.user ? item.user.email : 'John Doe'}
            </p>
          ),
          phone: (item: any) => (
            <p>
              {item.user ? item.user.phone : 3000000000}
            </p>
          ),
          pharmacy_name: (item: any) => (
            <p>
              {item.user ? item.user.pharmacy_name : 'EML SAS'}
            </p>
          ),
          chain: (item: any) => (
            <p>
              {item.user ? item.user.chain : 'EML SAS'}
            </p>
          ),
          options: (item: any) => (
            <React.Fragment>
              {item.status === 'Finalizado' ? (
              <Button color="green" text="white" onClick={() => handleActiveUser(item.id)}>
              Activar Nivel
            </Button>
            ) : (
              <Button color="#e9ecef" text="black">
              Activar Nivel
            </Button>
            )}
            </React.Fragment>
          ),
        }}
      </Table>
    </React.Fragment>
  );
};

export default Worlds;
