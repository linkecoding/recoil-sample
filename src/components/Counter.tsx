import { useRecoilState, useRecoilValue } from "recoil";
import { charCountState, textState } from "../atom/CounterAtom";

export const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: any) => {
    setText(event.target.value);
  };
  return <input type="text" onChange={onChange} value={text} />;
};

export const Counter = () => {
  const charCount = useRecoilValue(charCountState);
  return <h1>{charCount}</h1>;
};
