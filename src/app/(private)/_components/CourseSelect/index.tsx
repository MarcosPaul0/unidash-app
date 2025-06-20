import { GraduationCapIcon } from "@phosphor-icons/react/dist/ssr";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@unidash/components/Select";

export function CourseSelect() {
  return (
    <Select>
      <SelectTrigger
        className={`
            max-w-[460px] bg-button data-[placeholder]:text-button-foreground
            px-4 text-2xl font-title font-semibold text-button-foreground
            [&_svg:not([class*='text-'])]:text-button-foreground rounded-2xl
          `}
        size="lg"
      >
        <GraduationCapIcon
          size={24}
          className="text-button-foreground size-6"
        />

        <SelectValue className="" placeholder="Selecione um curso" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Cursos</SelectLabel>
          <SelectItem value="apple">Ciências da Computação</SelectItem>
          <SelectItem value="banana">Sistemas de Informação</SelectItem>
          <SelectItem value="blueberry">Engenharia da Computação</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
