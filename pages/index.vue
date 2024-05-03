<script setup lang="ts">
import { HeartHandshake, Clock, Award, SquareArrowUpRight, FlaskConical, Filter } from 'lucide-vue-next'
import { navigationMenuTriggerStyle } from '~/components/ui/navigation-menu'
import { cn } from '~/lib/utils'
import { disciplines } from '~/data'

useSeoMeta({
  title: 'СтанокLabs | Заказать лабораторные МГТУ СТАНКИН',
  ogTitle: 'СтанокLabs | Заказать лабораторные МГТУ СТАНКИН',
  description: 'Закажи любую лабораторную по программированию на 54. Лучшее место чтобы получить материал по программе МГТУ СТАНКИН',
  ogDescription: 'Закажи любую лабораторную по программированию на 54. Лучшее место чтобы получить материал по программе МГТУ СТАНКИН',
  ogImage: '../public/images/illustration.jpg',
})

const { md } = useScreenSize()

const termsToToggle = ['1', '2', '3', '4'] as const
type TogglableTerm = typeof termsToToggle[number]
const togglableTerms = ref<TogglableTerm[]>([])

const filteredDisciplines = computed(() => {
  return disciplines.map((d) => {
    return {
      title: d.title,
      terms: d.terms.filter((t) => {
        const termFilter = togglableTerms.value.length === 0 || togglableTerms.value.includes(t.order.toString() as TogglableTerm)
        return termFilter
      }),
    }
  }).filter(d => d.terms.length > 0)
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
            <NavigationMenuContent class="">
              <ul class="flex flex-col h-fit min-h-max w-full xs:w-[300px] xs:p-2 gap-2 p-0">
                <li class="w-full h-max">
                  <NavigationMenuLink as-child>
                    <NuxtLink
                      to="http://errcalc.biplane-design.com"
                      target="_blank"
                      :class="cn(navigationMenuTriggerStyle(), 'w-max h-fit grid grid-cols-[1fr,max-content] gap-2')"
                    >
                      Калькулятор погрешностей по физике <SquareArrowUpRight :stroke-width="1.2" />
                    </NuxtLink>
                  </NavigationMenuLink>
                </li>
                <li class="w-full h-max">
                  <NavigationMenuLink as-child>
                    <NuxtLink
                      to="https://optimization-methods.vercel.app/"
                      target="_blank"
                      :class="cn(navigationMenuTriggerStyle(), 'w-max h-fit grid grid-cols-[1fr,max-content] gap-2')"
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
              <NuxtLink
                to="https://t.me/nartemiy"
                target="_blank"
              >
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
          <Card>
            <CardContent class="p-6 grid grid-cols-[max-content,1fr] gap-4 items-center md:p-4">
              <HeartHandshake
                :size="md ? 40 : 50"
                class="w-max h-max text-red-500"
              />
              <span>Мы знакомы с программой и&nbsp;знаем её&nbsp;тонкости</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="p-6 grid grid-cols-[max-content,1fr] gap-4 items-center md:p-4">
              <Clock
                :size="md ? 40 : 50"
                class="w-max h-max text-red-500"
              />
              <span>Быстро выполняем заказы</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="p-6 grid grid-cols-[max-content,1fr] gap-4 items-center sm:p-4">
              <Award
                :size="md ? 40 : 50"
                class="w-max h-max text-red-500"
              />
              <span>Делаем лабораторные качественно</span>
            </CardContent>
          </Card>
        </div>
      </section>
      <section class="flex flex-col gap-4 container">
        <h2 class="text-2xl md:text-xl font-bold">
          Дисциплины
        </h2>
        <div class="flex items-center gap-4">
          <Filter />
          Семестры
          <ToggleGroup
            v-model="togglableTerms"
            type="multiple"
            class="w-fit"
          >
            <ToggleGroupItem
              v-for="term in termsToToggle"
              :key="term"
              :value="term"
              :variant="'outline'"
              class="aspect-square"
            >
              {{ term }}
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div class="grid grid-cols-1 gap-16">
          <div
            v-for="discipline in filteredDisciplines"
            :key="discipline.title"
            class="flex flex-col gap-4 border-primary"
          >
            <h3
              class="text-xl md:text-lg font-bold"
            >
              {{ discipline.title }}
            </h3>
            <div
              v-for="term in discipline.terms"
              :key="term.order"
              class="flex flex-col gap-1"
            >
              <h6 class="font-extrabold text-gray-400">
                Семестр {{ term.order }}
              </h6>
              <div class="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-4">
                <Popover
                  v-for="lab in term.labs"
                  :key="lab.order"
                >
                  <PopoverTrigger as-child>
                    <Card class="w-full cursor-pointer">
                      <CardContent class="grid grid-cols-1 gap-2 p-6 sm:p-4">
                        <div class="flex items-end justify-between">
                          <span class="text-lg md:text-base font-bold">
                            {{ lab.order }} лаб
                          </span>
                          <span class="text-lg md:text-base font-bold text-gray-400">
                            от {{ lab.minPrice }}р
                          </span>
                        </div>
                        <p class="">
                          {{ lab.description }}
                        </p>
                        <div class="flex items-center gap-2">
                          <Badge
                            v-if="lab.canBuyReady"
                            class="px-3 py-1"
                            variant="destructive-outline"
                          >
                            готовая
                          </Badge>
                          <Badge
                            v-if="lab.canOrderNew"
                            class="px-3 py-1"
                            variant="outline"
                          >
                            на заказ
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </PopoverTrigger>
                  <PopoverContent class="w-full p-6 sm:min-w-[300px] min-w-[500px] max-w-[90dvw]">
                    <div
                      class="grid grid-cols-1 gap-4"
                    >
                      <div
                        v-if="lab.canBuyReady"
                        class="flex flex-col gap-4"
                      >
                        <Badge
                          class="w-fit"
                          variant="destructive-outline"
                        >
                          готовая
                        </Badge>
                        <div
                          v-for="item in lab.ready"
                          :key="`${item.title}-${item.price}`"
                          class="flex sm:flex-col gap-x-6 gap-y-2 justify-between"
                        >
                          <div class="flex max-w-[400px] w-full flex-col gap-1">
                            <span
                              class="text-sm"
                            >{{ item.title || 'Готовая программа' }}</span>
                            <span class="font-bold">{{ item.price }}p</span>
                          </div>
                          <Button
                            variant="outline"
                            class="w-fit"
                          >
                            <NuxtLink
                              to="https://t.me/nartemiy"
                              target="_blank"
                            >
                              Купить
                            </NuxtLink>
                          </Button>
                        </div>
                      </div>
                      <div
                        v-if="lab.canOrderNew"
                        class="flex flex-col gap-4"
                      >
                        <Badge
                          class="w-fit"
                          variant="outline"
                        >
                          на заказ
                        </Badge>
                        <div
                          v-for="item in lab.new"
                          :key="`${item.title}-${item.price}`"
                          class="flex sm:flex-col gap-x-6 gap-y-2justify-between"
                        >
                          <div class="flex max-w-[400px] w-full flex-col gap-1">
                            <span class="text-sm">{{ item.title || 'Новая программа' }}</span>
                            <span class="font-bold">{{ item.price }}p</span>
                          </div>
                          <Button
                            variant="outline"
                            class="w-fit"
                          >
                            <NuxtLink
                              to="https://t.me/nartemiy"
                              target="_blank"
                            >
                              Заказать
                            </NuxtLink>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="flex flex-wrap gap-x-4 gap-y-2 items-center container">
        <h3 class="text-2xl md:text-xl font-bold">
          Не нашли нужное задание?
        </h3>
        <Button>
          <NuxtLink
            to="https://t.me/nartemiy"
            target="_blank"
          >
            Предложить своё
          </NuxtLink>
        </Button>
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
