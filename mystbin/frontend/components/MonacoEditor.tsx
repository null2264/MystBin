import {
  monaco,
  ControlledEditor,
  ControlledEditorOnChange,
} from "@monaco-editor/react";
import { PropsWithoutRef } from "react";

monaco.init().then((monaco) => {
  // MystBin Dark
  monaco.editor.defineTheme("mystBinDark", {
    base: "vs-dark",
    inherit: false,
    rules: [
      { token: "", foreground: "D4D4D4", background: "1E1E1E" },
      { token: "invalid", foreground: "f44747" },
      { token: "emphasis", fontStyle: "italic" },
      { token: "strong", fontStyle: "bold" },

      { token: "variable", foreground: "74B0DF" },
      { token: "variable.predefined", foreground: "4864AA" },
      { token: "variable.parameter", foreground: "9CDCFE" },
      { token: "constant", foreground: "569CD6" },
      { token: "comment", foreground: "608B4E" },
      { token: "number", foreground: "B5CEA8" },
      { token: "number.hex", foreground: "5BB498" },
      { token: "regexp", foreground: "B46695" },
      { token: "annotation", foreground: "cc6666" },
      { token: "type", foreground: "3DC9B0" },

      { token: "delimiter", foreground: "DCDCDC" },
      { token: "delimiter.html", foreground: "808080" },
      { token: "delimiter.xml", foreground: "808080" },

      { token: "tag", foreground: "569CD6" },
      { token: "tag.id.pug", foreground: "4F76AC" },
      { token: "tag.class.pug", foreground: "4F76AC" },
      { token: "meta.scss", foreground: "A79873" },
      { token: "meta.tag", foreground: "CE9178" },
      { token: "metatag", foreground: "DD6A6F" },
      { token: "metatag.content.html", foreground: "9CDCFE" },
      { token: "metatag.html", foreground: "569CD6" },
      { token: "metatag.xml", foreground: "569CD6" },
      { token: "metatag.php", fontStyle: "bold" },

      { token: "key", foreground: "9CDCFE" },
      { token: "string.key.json", foreground: "9CDCFE" },
      { token: "string.value.json", foreground: "CE9178" },

      { token: "attribute.name", foreground: "9CDCFE" },
      { token: "attribute.value", foreground: "CE9178" },
      { token: "attribute.value.number.css", foreground: "B5CEA8" },
      { token: "attribute.value.unit.css", foreground: "B5CEA8" },
      { token: "attribute.value.hex.css", foreground: "D4D4D4" },

      { token: "string", foreground: "CE9178" },
      { token: "string.sql", foreground: "FF0000" },

      { token: "keyword", foreground: "569CD6" },
      { token: "keyword.flow", foreground: "C586C0" },
      { token: "keyword.json", foreground: "CE9178" },
      { token: "keyword.flow.scss", foreground: "569CD6" },

      { token: "operator.scss", foreground: "909090" },
      { token: "operator.sql", foreground: "778899" },
      { token: "operator.swift", foreground: "909090" },
      { token: "predefined.sql", foreground: "FF00FF" },
    ],
    colors: {
      "editor.background": "#2B2B2B",
    },
  });
});

export default function MonacoEditor(
  props: PropsWithoutRef<{
    value: string;
    language: string;
    onChange: ControlledEditorOnChange;
    theme: string;
    readOnly: boolean;
  }>
) {
  let { value, onChange, theme, language, readOnly } = props;

  return (
    <ControlledEditor
      height="calc(82.5vh)"
      width="95%"
      value={value}
      theme={theme}
      onChange={onChange}
      language={language}
      options={{
        contextmenu: true,
        suggest: {},
        quickSuggestions: false,
        minimap: { enabled: false },
        readOnly: readOnly,
        lineDecorationsWidth: 0,
        lineNumbersMinChars: 2,
      }}
    />
  );
}
