import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from 'next/image'

interface Props {
  className?: string;
}

const header: React.FC<Props> = ({className}) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className='flex items-center justify-between py-8'>
        <div>
          <Image src="/logo.png" alt='Logo' width={35} height={35}/>
          <div>
            <h1 className="text-2xl uppercase front-black">Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">вкуснее уже некуда</p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default header