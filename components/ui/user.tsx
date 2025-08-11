import { Users, BookOpen } from "lucide-react"
import { Button } from "./button"

export function User() {
  return (
    <Users className="w-full border-t bg-background">
        <div className="grid grid-cols-1 md:grid-cols-4 p-5">
            <div className="text-center">
                <h3 className="font-semibold mb-4">Aniversariante do Mês</h3>
                <p className="text-sm text-muted-foreground">
                    Gilvan Sá.
                </p>
            </div>
            <div className="text-center">
                <h4 className="font-medium mb-4">Botões Ligeiros</h4>
                <ul className="space-y-2 text-sm">
                    <li>
                        <Button variant="secondary" className="w-full">Gilvan Sá</Button>
                    </li>
                    <li>
                        <Button variant="secondary" className="w-full">Ana Rangel</Button>
                    </li>
                    <li>
                        <Button variant="secondary" className="w-full">Valdirene</Button>
                    </li>
                </ul>
            </div>
            <div className="text-center">
                <h4 className="font-medium mb-4">Dia do Aniversariante do Mês</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Domingo: 03/08</li>
                    <li>Quarta: 08/08</li>
                </ul>
            </div>
            <div className="flex flex-col items-center text-center">
                <h4 className="font-medium mb-4">Aniversariantes</h4>
                <div className="flex space-x-4">
                    <a href="#" className="text-muted-foreground hover:text-primary">
                        < BookOpen className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                        < BookOpen className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                        < BookOpen className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </div>
        <div className="flex py-5 items-center justify-center border-t text-sm text-muted-foreground">
          © {new Date().getFullYear()} Igreja Batista Manancial no Angelim. Todos os direitos reservados.
        </div>
    </Users>
  )
}