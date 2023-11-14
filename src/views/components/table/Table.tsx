import React from "react";
import {map} from "lodash";
/** Styles */
import {StyledBody, StyledHeadRow, StyledPaginator, StyledTable, StyledTHead} from "./Table.styles.ts";

interface ITable {
    headings: {};
    data: any;
    children?: any;
}

const Table: React.FC<ITable> = ({headings, data, children}): JSX.Element => {
    /** States */
    const [page, setPage] = React.useState<number>(1);
    const [totalPages, setTotalPage] = React.useState<number>(data.length / 10);
    

    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;

    console.log("children: ", data)

    return (
        <div className="rounded-[10px] mt-[10px] shadow-[0_5px_10px_0_rgba(0,0,0,0.2)] bg-white">
            <div className="relative overflow-x-auto">
                <StyledTable>
                    <StyledTHead>
                        <StyledHeadRow>
                            {
                                map(Object.values(headings), (item: any, index: number) => (
                                    <th key={index}>{item}</th> 
                                ))
                            }
                        </StyledHeadRow>
                    </StyledTHead>
                    {
                        data && data.length > 0 ? (
                            <StyledBody>
                                {
                                    map(data && data.slice(startIndex, endIndex), (item: any, index: number) => (
                                        <tr key={index}>
                                            {
                                                map(Object.keys(headings), (key: string, indKey: number) => (
                                                    <td key={indKey}>
                                                        <p className="text-navy-800 font-medium">
                                                            {children && children[key] ? children[key](item) : item[key]}
                                                        </p>
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                            </StyledBody>
                        ) : (
                            <StyledBody>
                                <tr>
                                    <td colSpan={10}>
                                        Opsss...!, No hay datos...
                                    </td>
                                </tr>
                            </StyledBody>
                        )
                    }
                </StyledTable>
            </div>
            <StyledPaginator>
                <div className="paginator">
                    <div className="spacer"></div>
                    <p className="items">
                        {
                            data && data.length === 0 ?
                                "0 - 0 de 0" :
                                `${(page - 1) * 10 + 1} - ${Math.min(
                                    page * 10,
                                    data ? data.length : 0
                                )} de ${data ? data.length : 0}`
                        }
                    </p>
                    <div className="buttons">
                        <button
                            className="left-button"
                            onClick={() => {
                                if(page - 1 > 0) {
                                    setPage(page - 1)
                                }
                            }}
                        >
                            <svg aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowLeftIcon">
                                <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
                            </svg>
                        </button>
                        <button
                            className="right-button"
                            onClick={() => {
                                setTotalPage(Math.round(data.length / 10))
                                if(page + 1 <= totalPages) {
                                    setPage(page + 1)
                                }
                            }}
                        >
                            <svg aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon">
                                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </StyledPaginator>
        </div>
    );
}

export default Table;