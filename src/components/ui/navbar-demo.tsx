import { Home, FileText, CreditCard, Info } from "lucide-react"
import { AnimeNavBar } from "@/components/ui/anime-navbar"

const items = [
  {
    name: "Home",
    url: "#",
    icon: Home,
  },
  {
    name: "Features",
    url: "#features",
    icon: FileText,
  },
  {
    name: "Community",
    url: "#community",
    icon: CreditCard,
  },
  {
    name: "About",
    url: "#about",
    icon: Info,
  },
]

export function AnimeNavBarDemo() {
  return <AnimeNavBar items={items} defaultActive="Home" />
}
