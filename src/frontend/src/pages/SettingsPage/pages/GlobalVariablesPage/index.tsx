import IconComponent from "../../../../components/genericIconComponent";
import { Button } from "../../../../components/ui/button";

import { ColDef, ColGroupDef, SelectionChangedEvent } from "ag-grid-community";
import { useEffect, useState } from "react";
import AddNewVariableButton from "../../../../components/addNewVariableButtonComponent/addNewVariableButton";
import Dropdown from "../../../../components/dropdownComponent";
import ForwardedIconComponent from "../../../../components/genericIconComponent";
import TableComponent from "../../../../components/tableComponent";
import { Badge } from "../../../../components/ui/badge";
import { cn } from "../../../../utils/utils";
import { useGlobalVariablesStore } from "../../../../stores/globalVariables";

export default function GlobalVariablesPage() {
  const rows: Array<{type: string | undefined; id: string; name: string}> = [];
  const globalVariablesEntries = useGlobalVariablesStore(state => state.globalVariablesEntries);
  const removeGlobalVariable = useGlobalVariablesStore(state => state.removeGlobalVariable);
  const globalVariables = useGlobalVariablesStore(state => state.globalVariables);
  globalVariablesEntries.forEach((e) => {
    const globalVariableObj = globalVariables[e]
    rows.push({type: globalVariableObj.type, id: globalVariableObj.id, name: e})
  })

  const BadgeRenderer = (props) => {
    return (
      <div>
        <Badge variant="outline" size="md" className="font-normal">
          {props.value}
        </Badge>
      </div>
    );
  };

  useEffect(() => {
    setRowData(rows)
  }, [globalVariables])

  const DropdownEditor = ({ options, value, onValueChange }) => {
    return (
      <Dropdown options={options} value={value} onSelect={onValueChange}>
        <div className="-mt-1.5 w-full"></div>
      </Dropdown>
    );
  };
  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<(ColDef<any> | ColGroupDef<any>)[]>([
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      showDisabledCheckboxes: true,
      headerName: "Variable Name",
      field: "name",
      flex: 1,
    }, //This column will be twice as wide as the others
    {
      field: "type",
      cellRenderer: BadgeRenderer,
      cellEditor: DropdownEditor,
      cellEditorParams: {
        options: ["Prompt", "Credential"],
      },
      flex: 1,
      editable: true,
    },
    {
      field: "value",
      cellEditor: "agLargeTextCellEditor",
      cellEditorPopup: true,
      flex: 2,
      editable: true,
    },
    {
      headerName: "Apply To Fields",
      field: "defaultFields",
      flex: 1,
      editable: true,
    },
  ]);

  const [rowData, setRowData] = useState([
    {
      name: "OpenAI Key",
      type: "Credential",
      value: "apijpioj09u302j0982ejf",
      defaultFields: "Open AI API Key",
    },
    {
      name: "Prompt",
      type: "Prompt",
      value: `Answer user's questions based on the document below:

    ---
    
    {Document}
    
    ---
    
    Question:
    {Question}
    
    Answer:
    `,
      defaultFields: ["Prompt"],
    },
    {
      name: "Azure Key",
      type: "Credential",
      value: "awowkdenvoaimojndofunoweoij0293u0n2e08n23",
      defaultFields: ["Azure API Key"],
    },
  ]);

  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  function removeVariables() {
    selectedRows.forEach(row => {
      removeGlobalVariable(row)
    })
  }

  return (
    <div className="flex h-full w-full flex-col justify-between gap-6">
      <div className="flex w-full items-center justify-between gap-4 space-y-0.5">
        <div className="flex w-full flex-col">
          <h2 className="flex items-center text-lg font-semibold tracking-tight">
            Global Variables
            <ForwardedIconComponent
              name="Globe"
              className="ml-2 h-5 w-5 text-primary"
            />
          </h2>
          <p className="text-sm text-muted-foreground">
            Manage global variables and assign them to fields.
          </p>
        </div>
        <div className="flex flex-shrink-0 items-center gap-2">
          <Button
            data-testid="api-key-button-store"
            variant="primary"
            className="group px-2"
            disabled={selectedRows.length === 0}
            onClick={removeVariables}
          >
            <IconComponent
              name="Trash2"
              className={cn(
                "h-5 w-5 text-destructive group-disabled:text-primary"
              )}
            />
          </Button>
          <AddNewVariableButton>
            <Button data-testid="api-key-button-store" variant="primary">
              <IconComponent name="Plus" className="mr-2 w-4" />
              Add New
            </Button>
          </AddNewVariableButton>
        </div>
      </div>

      <div className="flex h-full w-full flex-col justify-between pb-8">
        <TableComponent
          onSelectionChanged={(event: SelectionChangedEvent) => {
            setSelectedRows(event.api.getSelectedRows().map((row) => row.name));
          }}
          rowSelection="multiple"
          suppressRowClickSelection={true}
          columnDefs={colDefs}
          rowData={rowData}
        />
      </div>
    </div>
  );
}