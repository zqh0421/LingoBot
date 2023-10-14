import { Button } from "@/components/ui/button";
import { PromptForm } from "@/components/promptform";
import ButtonScrollToBottom from "@/components/scrolltobottom";
import { IconRefresh, IconStop } from "@/components/ui/icons";

export interface IMessage {
  role: "AI" | "HUMAN" | "SYSTEM" | "AI_ANSWER";
  content: string;
  word?: string;
  context?: string;
}

export interface InputPanelProps {
  id?: string;
  isLoading: boolean;
  stop: () => void;
  reload: () => void;
  append: (message: IMessage) => void;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  messages: IMessage[];
}

export const InputPanel: React.FC<InputPanelProps> = ({
  id,
  isLoading,
  stop,
  append,
  reload,
  input,
  setInput,
  messages,
}: InputPanelProps) => {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-gradient-to-b from-muted/10 from-10% to-muted/30 to-50%">
      <ButtonScrollToBottom />
      <div className="mx-auto sm:max-w-2xl sm:px-4">
        <div className="flex h-10 items-center justify-center mb-4">
          {isLoading ? (
            <Button variant="outline" onClick={() => stop()} className="bg-white">
              <IconStop className="mr-2" />
              Stop generating
            </Button>
          ) : (
            messages?.length > 0 && (
              <Button
                variant="outline"
                onClick={() => reload()}
                className="bg-white hover:text-white"
              >
                <IconRefresh className="mr-2" />
                Regenerate response
              </Button>
            )
          )}
        </div>
        <div className="space-y-4 rounded-t-2xl bg-white px-4 py-2 shadow-generalReverse sm:rounded-t-xl sm:border md:py-4">
          <PromptForm
            onSubmit={async (value) => {
              append({
                content: value,
                role: "HUMAN",
              });
            }}
            input={input}
            setInput={setInput}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};
