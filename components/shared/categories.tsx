import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

const cats = ['Пиццы', 'Комбо', 'Закуски', 'Кофе','Напитки', 'Десерты' ];
const activIndex = 0;

export const Categories: React.FC<Props> = ({className}) => {
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {
        cats.map((cat, index) => (
          <a className={cn(
            'flex items-center font-bolt h-11 rounder-2xl px-5',
            activIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary rounded-2xl'
          )} key={index}>
            <button>
              {cat}
            </button>
          </a>
        ))
      }
    </div>
  );
}

