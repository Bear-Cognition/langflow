import { useState } from "react";
import InputComponent from "../../../components/inputComponent";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Textarea } from "../../../components/ui/textarea";
import { registerGlobalVariable } from "../../../controllers/API";
import BaseModal from "../../../modals/baseModal";
import { useGlobalVariablesStore } from "../../../stores/globalVariables";

//TODO IMPLEMENT FORM LOGIC

export default function AddNewVariableButton({children}): JSX.Element {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [provider, setProvider] = useState("");
  const [open, setOpen] = useState(false);
  const addGlobalVariable = useGlobalVariablesStore(
    (state) => state.addGlobalVariable
  );
  function handleSaveVariable() {
    let data: { name: string; value: string; provider?: string } = {
      name: key,
      value,
    };
    if (provider) data = { ...data, provider };
    registerGlobalVariable(data).then((_) => {
      addGlobalVariable(key, value, provider);
      setKey("");
      setValue("");
      setProvider("");
      setOpen(false);
    });
  }
  return (
    <BaseModal open={open} setOpen={setOpen} size="x-small">
      <BaseModal.Header
        description={"write a text variable to use anywhere on your flow"}
      >
        <span>Create a new Variable</span>
      </BaseModal.Header>
      <BaseModal.Trigger>
        {children}
      </BaseModal.Trigger>
      <BaseModal.Content>
        <div className="flex gap-4 h-full w-full flex-col align-middle">
            <Label>Variable name </Label>
            <Input
              value={key}
              onChange={(e) => {
                setKey(e.target.value);
              }}
              placeholder="Insert a name for the variable..."
            ></Input>
            <Label>Provider (optional) </Label>
            <InputComponent
              value={provider}
              onChange={(e) => {
                setProvider(e);
              }}
              password={false}
              options={["OPENAI_API_KEY", "ANTHROPIC_API_KEY"]}
              placeholder="Choose a provider between the environment variables..."
            ></InputComponent>
            <Label>Variable Value </Label>
            <Textarea
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              placeholder="Insert a value for the variable..."
              className="w-full resize-none custom-scroll"
            />
        </div>
      </BaseModal.Content>
      <BaseModal.Footer>
        <Button onClick={handleSaveVariable}>Save variable</Button>
      </BaseModal.Footer>
    </BaseModal>
  );
}