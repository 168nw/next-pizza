import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { FilterCheckbox } from './filter-chekbox';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({className}) => {
  return (
    <div className={cn('', className)}>
      <Title text='Фильтрация' size='sm' className='mb-5 front-bold'></Title>
    <FilterCheckbox text='Можно собрать' value='1'/>
    <FilterCheckbox text='Новинки' value='2'/>
    </div>
  );
}

