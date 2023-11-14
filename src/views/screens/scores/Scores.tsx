import useControllers from "controllers";
import React from "react";
import useViews from "views";
import moment from "moment";

const Scores: React.FC = (): JSX.Element => {
  /** Views */
  const { useComponents } = useViews();
  const { Table, Button } = useComponents();

  /** Controllers */
  const { useScreensHooks } = useControllers();
  const { useScores } = useScreensHooks();
  const { headings, scores } = useScores();

  return (
    <React.Fragment>
      <Table headings={headings} data={scores}>
        {{
          name: (item: any) => (
            <p>
              {item.user.name}
            </p>
          ),
          email: (item: any) => (
            <p>
              {item.user.email}
            </p>
          ),
          phone: (item: any) => (
            <p>
              {item.user.phone}
            </p>
          ),
          pharmacy_name: (item: any) => (
            <p>
              {item.user.pharmacy_name}
            </p>
          ),
          chain: (item: any) => (
            <p>
              {item.user.chain}
            </p>
          ),
          score: (item: any) => (
            <Button color="green" text="white">
              {parseInt(item.score).toLocaleString("es-CO")}
            </Button>
          ),
        }}
      </Table>
    </React.Fragment>
  );
};

export default Scores;
