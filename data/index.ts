function canBuyReady(lab: Lab) {
  return lab.ready?.length || 0
}

function canOrderNew(lab: Lab) {
  return lab.new?.length || 0
}

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
      labs: [
        {
          order: '1',
          description: 'Вывести на экран 3d призму',
          new: [
            {
              title: 'На 45',
              price: 1000,
            },
          ],
          ready: [
            {
              title: 'Задание на 50',
              price: 700,
            },
          ],
        }, {
          order: '2',
          description: 'Освещение и текстурирование',
          new: [
            {
              title: 'Освещение и одна текстура с нуля',
              price: 1500,
            }, {
              title: 'На основе вашей фигуры',
              price: 1000,
            },
          ],
        }, {
          order: '3',
          description: 'Кривые Безье и Эрмита, Поверхность Безье',
          ready: [
            {
              title: '2 кривые Безье, 2 Эрмита',
              price: 700,
            },
            {
              title: '+ с движением куба по кривым',
              price: 1000,
            },
            {
              title: '+ с движением куба по кривым и поверхностью Безье из точек',
              price: 1500,
            },
          ],
        },
      ],
    }],
  },
]

type LabMapped = Lab & {
  minPrice: number
  canBuyReady: number
  canOrderNew: number
}

type TermMapped = Term & {
  labs: LabMapped[]
}

type DisciplineMapped = Discipline & {
  terms: TermMapped[]
}

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
            canBuyReady: canBuyReady(l),
            canOrderNew: canOrderNew(l),
          } satisfies LabMapped
        }),
      }
    }),
  }
})

export { disciplinesWithAdditionalInfo as disciplines }
export { type DisciplineMapped as Discipline }
