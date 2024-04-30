<script setup lang="ts">
import { HeartHandshake, Clock, Award, SquareArrowUpRight } from 'lucide-vue-next'
import { navigationMenuTriggerStyle } from '~/components/ui/navigation-menu'
import { buttonVariants } from '~/components/ui/button'
import { cn } from '~/lib/utils'

useSeoMeta({
  title: 'СтанокLabs | Заказать лабораторные МГТУ СТАНКИН',
})

const { md } = useScreenSize()

type Lab = {
  order: string
  description: string
}

type Term = {
  order: number
  labs: Lab[]
}

type Discipline = {
  title: string
  terms: Term[]
}
const disciplines: Discipline[] = [
  {
    title: 'Программирование на ЯВУ',
    terms: [
      {
        order: 1,
        labs: [
          {
            order: '1',
            description: 'if-else',
          },
          {
            order: '2',
            description: 'Массив',
          },
          {
            order: '3',
            description: 'Матрица',
          },
          {
            order: '4',
            description: 'Парсинг скобок <> в строке',
          },
          {
            order: '5',
            description: 'Работа с файлами',
          },
          {
            order: '6',
            description: 'Прототипы функции, матрицы',
          },
        ],
      },
      {
        order: 2,
        labs: [
          {
            order: '1',
            description: 'Вывод таблицы в терминал',
          },
          {
            order: '2+3',
            description: 'СУБД (TTY)',
          },
          {
            order: '4',
            description: 'Классы С++',
          },
          {
            order: '5',
            description: 'Классы, перегрузка операторов',
          },

        ],
      },
      {
        order: 3,
        labs: [
          {
            order: '1',
            description: 'Наследование, геометрическая фигура',
          },
          {
            order: '2',
            description: 'WinForms',
          },
          {
            order: '3',
            description: 'Парсер языка C++ на 60+ баллов',
          },
        ],
      },
    ],
  },
  {
    title: 'Структуры и алгоритмы обработки данных',
    terms: [
      {
        order: 3,
        labs: [
          {
            order: '1',
            description: 'Работа со статическими строками',
          },
          {
            order: '2',
            description: 'Работа с динамическими строками, malloc, calloc, realloc',
          },
          {
            order: '3',
            description: 'Односвязный список, Двусвязный список',
          },
          {
            order: '4',
            description: 'Интерфейс (TTY) для работы со списками',
          },
          {
            order: '5',
            description: 'Сортировки: Selection Sort (выборкой), Bubble sort (пузырьком), Shaker sort (шейкерная), Quick sort (быстрая)',
          },
        ],
      },
    ],
  },
  {
    title: 'ЭВМ и периферийные устройства (Ассемблер)',
    terms: [
      {
        order: 2,
        labs: [
          {
            order: '1+2',
            description: '',
          },
          {
            order: '3',
            description: 'Вывод имени',
          },
          {
            order: '4',
            description: '',
          },
          {
            order: '5',
            description: 'Строки',
          },
        ],
      },
      {
        order: 3,
        labs: [
          {
            order: '1',
            description: 'Строки',
          },
          {
            order: '2',
            description: 'Рисование рамок с текстом',
          },
        ],
      },
    ],
  },
  {
    title: 'Объектно-ориентированное программирование',
    terms: [{
      order: 4,
      labs: [
        {
          order: '1',
          description: 'Матрица',
        },
        {
          order: '2',
          description: 'Наследование',
        },
      ],
    }],
  },
  {
    title: 'Компьютерная графика (OpenGL)',
    terms: [{
      order: 4,
      labs: [{
        order: '1',
        description: 'Вывести на экран 3d призму',
      }],
    }],
  },
]
</script>

<template>
  <div class="flex flex-col min-h-[100dvh] overflow-hidden">
    <header class="container px-4 h-14 flex justify-between items-center border-b">
      <div
        class="flex gap-2 items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6"
        >
          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
        <span class="">СтанокLabs</span>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Экосистема
            </NavigationMenuTrigger>
            <NavigationMenuContent class="relative text-sm">
              <ul class="flex flex-col w-full xs:w-[300px] xs:p-2 gap-2 p-4">
                <li class="w-full">
                  <NavigationMenuLink as-child>
                    <NuxtLink
                      to="http://errcalc.biplane-design.com"
                      :class="cn(navigationMenuTriggerStyle(), 'w-full h-full grid grid-cols-[1fr,max-content] gap-2')"
                    >
                      Калькулятор погрешностей по физике <SquareArrowUpRight :stroke-width="1.2" />
                    </NuxtLink>
                  </NavigationMenuLink>
                </li>
                <li class="w-full">
                  <NavigationMenuLink as-child>
                    <NuxtLink
                      to="http://errcalc.biplane-design.com"
                      :class="cn(navigationMenuTriggerStyle(), 'w-full h-full grid grid-cols-[1fr,max-content] gap-2')"
                    >
                      Методы оптимизации <SquareArrowUpRight :stroke-width="1.2" />
                    </NuxtLink>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
    <main class="flex-1 flex flex-col gap-16">
      <section class="w-full container">
        <div class="grid relative lg:gap-6 pt-10 items-center xl:grid-cols-[1fr_500px] lg:grid-cols-1 gap-12 grid-cols-[1fr_600px]">
          <div class="lg:max-w-[400px]">
            <h1 class="text-4xl lg:text-3xl sm:text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Закажи любую лабораторную по программированию на<span class="text-red-500">&nbsp;&nbsp;54</span>
            </h1>
            <p class="mt-2 max-w-[600px] text-gray-500 text-lg md:text-base dark:text-gray-400">
              Лучшее место чтобы получить материал по программе <span class="text-red-500 font-bold">МГТУ&nbsp;СТАНКИН</span>
            </p>
            <Button class="mt-6">
              Заказать работу
            </Button>
          </div>
          <NuxtImg
            class="w-full lg:absolute -z-10 top-0 right-0 lg:w-[500px] sm:hidden md:w-[400px] lg:opacity-80 md:opacity-50"
            src="/images/illustration.jpg"
          />
        </div>
      </section>
      <section class="flex flex-col gap-4 container">
        <h2 class="text-2xl md:text-xl font-bold">
          Почему нас стоит выбрать
        </h2>
        <div class="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8 md:gap-4">
          <div class="grid grid-cols-[max-content,1fr] gap-4 border-2 border-primary p-8 sm:px-4 rounded-3xl items-center md:p-6 md:rounded-6">
            <HeartHandshake
              :size="md ? 40 : 50"
              class="w-max h-max text-red-500"
            />
            <span>Мы знакомы с программой и&nbsp;знаем её&nbsp;тонкости</span>
          </div>
          <div class="grid grid-cols-[max-content,1fr] gap-4 border-2 border-primary p-8 rounded-3xl items-center md:p-6 md:rounded-6">
            <Clock
              :size="md ? 40 : 50"
              class="w-max h-max text-red-500"
            />
            <span>Быстро выполняем заказы</span>
          </div>
          <div class="grid grid-cols-[max-content,1fr] gap-4 border-2 border-primary p-8 rounded-3xl items-center md:p-6 md:rounded-6">
            <Award
              :size="md ? 40 : 50"
              class="w-max h-max text-red-500"
            />
            <span>Делаем лабораторные качественно</span>
          </div>
        </div>
      </section>
      <section class="flex flex-col gap-4 container">
        <h2 class="text-2xl md:text-xl font-bold">
          Дисциплины
        </h2>
        <div class="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8 md:gap-4">
          <div
            v-for="discipline in disciplines"
            :key="discipline.title"
            class="flex  flex-col gap-4 border-primary border-2 p-8 rounded-3xl md:p-6 md:rounded-6"
          >
            <h3
              class="font-bold"
            >
              {{ discipline.title }}
            </h3>
            <ul
              v-for="term in discipline.terms"
              :key="term.order"
              class="flex flex-col gap-1"
            >
              <h6 class="font-bold">
                Семестр {{ term.order }}
              </h6>
              <li
                v-for="lab in term.labs"
                :key="lab.order"
                class=""
              >
                <span>Лаб {{ lab.order }}</span><span class="ml-4 text-sm text-slate-700">{{ lab.description }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="grid grid-cols-3" />
    </main>
    <footer class="flex gap-4 justify-between py-6 border-t container">
      <span class="text-sm text-gray-500">
        © 2024 СтанокLabs
      </span>
      <span class="text-sm text-gray-500">
        Изображение от Freepik
      </span>
    </footer>
  </div>
</template>
