import useControllers from "controllers";
import React from "react";
import useViews from "views";
import moment from 'moment';

const Certificaciones: React.FC = (): JSX.Element => {
  /** Views */
  const { useComponents } = useViews();
  const { Table, Button } = useComponents();

  /** Controllers */
  const {useScreensHooks} = useControllers();
  const {useCertifications} = useScreensHooks();
  const {headings, certifications} = useCertifications();
  
  return (
    <React.Fragment>
        <Table headings={headings} data={certifications}>
            {{
              options: (item: any) => (
                <a href={`${import.meta.env.VITE_APP_API_BASE_URL}/certification/generate/${item.id}`} target="_blank">
                  <Button color="#00C853" text="white">Generar Certificado</Button>
                </a>
              )
            }}
        </Table>
    </React.Fragment>
  );
};

export default Certificaciones;
