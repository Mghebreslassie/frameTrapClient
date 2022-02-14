import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

type MoveSet = {
  command: string;
  damage: string;
  guard: string;
  startup: string;
  active: string;
  recovery: string;
  on_block: string;
  invulnerability: string;
  _id: string;
};
type IProps = {
  moveList: MoveSet[];
};
const FrameDataTable: NextPage<IProps> = ({ moveList }) => {
  // const rowsTest: GridRowsProp = [
  //   { id: 1, col1: "5p", col2: "50" },
  //   { id: 2, col1: "2d", col2: "32" },
  //   { id: 3, col1: "6p", col2: "37" },
  // ];

  // let columns: GridColDef[] = [
  //   { field: "col1", headerName: "Command", width: 150 },
  //   { field: "col2", headerName: "Damage", width: 150 },
  // ];
  const [rows, setRows] = useState(rowValueFunc(moveList.slice(1)));
  const [cols, setCols] = useState(colHeaderFunc(moveList[0]));

  useEffect(() => {}, []);
  function colHeaderFunc(columnHeaders: any) {
    let arr = [];
    let num = 1;
    for (const prop in columnHeaders) {
      let x = {
        field: `col${num}`,
        headerName: prop,
        flex: 1,
      };
      arr.push(x);
      num += 1;
    }
    return arr;
  }

  function rowValueFunc(moveSet: Array<MoveSet>): any {
    let arr: Array<{
      id: number;
      col1: string;
      col2: string;
      col3: string;
      col4: string;
      col5: string;
      col6: string;
      col7: string;
      col8: string;
    }> = [];
    let num = 1;
    moveSet.forEach((set) => {
      let x = {
        id: num,
        col1: set.command,
        col2: set.damage,
        col3: set.guard,
        col4: set.startup,
        col5: set.active,
        col6: set.recovery,
        col7: set.on_block,
        col8: set.invulnerability,
      };
      arr.push(x);
      num += 1;
    });
    return arr;
  }
  //   const arr: GridColDef[] = myFunc(data.moveSet[0]);
  //   const arr2: GridRowsProp = secFunc(data.moveSet);
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={cols} />
    </div>
  );
};

export default FrameDataTable;
