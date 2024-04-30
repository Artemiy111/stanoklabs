<script setup lang="ts">
import { HeartHandshake, Clock, Award, SquareArrowUpRight, FlaskConical } from 'lucide-vue-next'
import { navigationMenuTriggerStyle } from '~/components/ui/navigation-menu'
import { cn } from '~/lib/utils'

useSeoMeta({
  title: 'СтанокLabs | Заказать лабораторные МГТУ СТАНКИН',
  ogTitle: 'СтанокLabs | Заказать лабораторные МГТУ СТАНКИН',
  description: 'Закажи любую лабораторную по программированию на 54. Лучшее место чтобы получить материал по программе МГТУ СТАНКИН',
  ogDescription: 'Закажи любую лабораторную по программированию на 54. Лучшее место чтобы получить материал по программе МГТУ СТАНКИН',
  ogImage: '/public/images/illustration.jpg',
})

const { md } = useScreenSize()

type Lab = {
  order: string
  description: string
  ready?: Array<{
    title?: string
    price: number
  }>
  new?: Array<{
    title?: string
    price: number
  }>
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
            new: [{
              price: 500,
            }],
          },
          {
            order: '2',
            description: 'Массив',
            ready: [{
              price: 500,
            }],
          },
          {
            order: '3',
            description: 'Матрица',
            ready: [{
              price: 500,
            }],
          },
          {
            order: '4',
            description: 'Парсинг скобок <> в строке',
            ready: [{
              price: 500,
            }],
          },
          {
            order: '5',
            description: 'Работа с файлами',
            ready: [{
              price: 500,
            }],
          },
          {
            order: '6',
            description: 'Прототипы функции, матрицы',
            ready: [{
              price: 500,
            }],
          },
        ],
      },
      {
        order: 2,
        labs: [
          {
            order: '1',
            description: 'Вывод таблицы в терминал',
            ready: [{
              price: 600,
            }],
          },
          {
            order: '2+3',
            description: 'СУБД (TTY)',
            ready: [{
              price: 750,
            }],
          },
          {
            order: '4',
            description: 'Классы С++',
            ready: [{
              price: 500,
            }],
          },
          {
            order: '5',
            description: 'Классы, перегрузка операторов',
            ready: [{
              price: 500,
            }],
          },

        ],
      },
      {
        order: 3,
        labs: [
          {
            order: '1',
            description: 'Наследование, геометрическая фигура',
            ready: [{
              price: 500,
            }],
          },
          {
            order: '2',
            description: 'WinForms',
            ready: [{
              price: 1000,
            }],
          },
          {
            order: '3',
            description: 'Парсер языка C++ на 60+ баллов',
            ready: [
              {
                price: 1000,
                title: 'Парсер конструктора класса',
              },
              {
                price: 1000,
                title: 'Парсер объявления многомерного массива',
              },
              {
                price: 2000,
                title: 'Парсер на 60+ баллов: почти всё подмножество C и полное объявление класса C++',
              },
            ],
            new: [{
              price: 1200,
            }],
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
            ready: [
              {
                price: 500,
              },
            ],
          },
          {
            order: '2',
            description: 'Работа с динамическими строками, malloc, calloc, realloc',
            ready: [
              {
                price: 600,
              },
            ],
          },
          {
            order: '3',
            description: 'Односвязный список, Двусвязный список',
            ready: [
              {
                price: 750,
              },
            ],
          },
          {
            order: '4',
            description: 'Интерфейс (TTY) для работы со списками',
            ready: [
              {
                price: 1000,
              },
            ],
          },
          {
            order: '5',
            description: 'Сортировки: Selection Sort (выборкой), Bubble sort (пузырьком), Shaker sort (шейкерная), Quick sort (быстрая)',
            ready: [
              {
                price: 500,
              },
            ],
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
            ready: [
              {
                price: 500,
              },
            ],
          },
          {
            order: '3',
            description: 'Вывод имени',
            ready: [
              {
                price: 500,
              },
            ],
          },
          {
            order: '4',
            description: '',
            ready: [
              {
                price: 500,
              },
            ],
          },
          {
            order: '5',
            description: 'Строки',
            ready: [
              {
                price: 500,
              },
            ],
          },
        ],
      },
      {
        order: 3,
        labs: [
          {
            order: '1',
            description: 'Строки',
            ready: [
              {
                price: 700,
              },
            ],
          },
          {
            order: '2',
            description: 'Рисование рамок с текстом',
            ready: [
              {
                price: 1000,
              },
            ],
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
          ready: [
            {
              price: 500,
            },
          ],
        },
        {
          order: '2',
          description: 'Наследование',
          ready: [
            {
              price: 500,
            },
          ],
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
        ready: [{
          title: 'Задание на 50',
          price: 700,
        }],
      }],
    }],
  },
]

const disciplinesWithAdditionalInfo = disciplines.map((d) => {
  return {
    title: d.title,
    terms: d.terms.map((t) => {
      return {
        order: t.order,
        labs: t.labs.map((l) => {
          const minPriceReady = Math.min(...(l.ready?.map(r => r.price) || [Infinity]))
          const minPriceNew = Math.min(...(l.new?.map(n => n.price) || [Infinity]))
          return {
            ...l,
            minPrice: Math.min(minPriceReady, minPriceNew),
          }
        }),
      }
    }),
  }
})
</script>

<template>
  <div class="flex flex-col min-h-[100dvh] overflow-hidden">
    <header class="container px-4 h-14 flex justify-between items-center border-b">
      <div
        class="flex gap-2 items-center justify-center"
      >
        <FlaskConical
          class="text-red-500"
        />
        <span class="">Станок<span class="text-red-500 font-bold">Labs</span> </span>
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
                      to="https://optimization-methods.vercel.app/"
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
              <NuxtLink to="https://t.me/nartemiy">
                Заказать работу
              </NuxtLink>
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
        <div class="grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-8 md:gap-4">
          <div
            v-for="discipline in disciplinesWithAdditionalInfo"
            :key="discipline.title"
            class="flex flex-col gap-6 border-primary border-2 p-8 rounded-3xl md:px-4 md:py-6 md:rounded-6"
          >
            <h3
              class="font-bold"
            >
              {{ discipline.title }}
            </h3>
            <div
              v-for="term in discipline.terms"
              :key="term.order"
              class="flex flex-col gap-1"
            >
              <h6 class="font-bold">
                Семестр {{ term.order }}
              </h6>
              <ul class="flex flex-col gap-4">
                <Popover
                  v-for="lab in term.labs"
                  :key="lab.order"
                >
                  <PopoverTrigger as-child>
                    <li

                      class="flex flex-col cursor-pointer hover:bg-primary-foreground relative hover:px-4 hover:-left-4 hover:w-[calc(100%+16px+16px)] rounded-lg"
                    >
                      <div class="flex items-start">
                        <span class="w-[100px]">Лаб {{ lab.order }}</span>
                        <span class="text-sm">от {{ lab.minPrice }}p</span>
                      </div>
                      <span class="text-sm text-slate-700">{{ lab.description }}</span>
                    </li>
                  </PopoverTrigger>
                  <PopoverContent class="w-full md:max-w-11/12">
                    <div class="flex flex-col gap-4">
                      <div
                        v-for="item in lab.ready"
                        :key="`${item.title}-${item.price}`"
                        class="flex gap-6 justify-between"
                      >
                        <div class="flex max-w-[400px] w-full flex-col gap-1">
                          <span
                            class="text-sm"
                          >{{ item.title || 'Готовая программа' }}</span>
                          <span class="font-bold">{{ item.price }}p</span>
                        </div>
                        <Button variant="secondary">
                          <NuxtLink to="https://t.me/nartemiy">
                            Купить
                          </NuxtLink>
                        </Button>
                      </div>
                      <div
                        v-for="item in lab.new"
                        :key="`${item.title}-${item.price}`"
                        class="flex gap-6 justify-between"
                      >
                        <div class="flex max-w-[400px] w-full flex-col gap-1">
                          <span class="text-sm">{{ item.title || 'Новая программа' }}</span>
                          <span class="font-bold">{{ item.price }}p</span>
                        </div>
                        <Button variant="secondary">
                          <NuxtLink to="https://t.me/nartemiy">
                            Заказать
                          </NuxtLink>
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="flex flex-wrap gap-x-4 gap-y-2 items-center container">
        <h3 class="text-2xl md:text-xl font-bold">
          Не нашли нужное задание?
        </h3>
        <Button>Предложить своё</Button>
      </section>
    </main>
    <footer class="flex mt-12 gap-4 justify-between py-6 border-t container">
      <span class="text-sm md:text-xs text-gray-500">
        © 2024 СтанокLabs
      </span>
      <span class="text-sm md:text-xs text-gray-500">
        Изображение от Freepik
      </span>
    </footer>
  </div>
</template>
