import useControllers from "controllers";
import React from "react";
import useViews from "views";
import moment from 'moment';
import Progress from "views/components/progress";

const Quiz: React.FC = (): JSX.Element => {
  /** Views */
  const { useComponents } = useViews();
  const { Table, Button } = useComponents();

  /** Controllers */
  const {useScreensHooks} = useControllers();
  const {useQuizzes} = useScreensHooks();
  const {headings, quizzes} = useQuizzes();
  
  return (
    <React.Fragment>
        <Table headings={headings} data={quizzes}>
          {{
            progress: (item: any) => (
              <div className="gap-[4px]">
                <p className="text-center text-[12px]">{item.progress}%</p>
                <Progress width={item.progress} color="purple" value={item.progress}/>
              </div>
            )
          }}
        </Table>
    </React.Fragment>
  );
};

export default Quiz;
