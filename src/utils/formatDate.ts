import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function formatDate(date: string, pattern: string) {
  return format(new Date(date), pattern, {
    locale: ptBR,
  });
}
