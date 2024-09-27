import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Title, Container, SortPopup, TopBar, Filters } from "@/components/shared";
import { Categories } from './../components/shared/categories';

export default function Home() {
  return (
<>
  <Container className="mt-10">
    <Title text="Все приццы" size='lg' className="front-extrabold"/>
  </Container>
  <TopBar/>

  <Container className="pb-14">
    <div className="flex gap-[60px]">

      {/* Фильтрация */}
      <div className="w-[250px]">
        <Filters/>
      </div>

      {/* Список товаров */}
      <div className="flex flex-col gap-16">
        Список товаров
      </div>
    </div>
  </Container>
</>
);
}
