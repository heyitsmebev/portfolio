"use client";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import Header from "./common/header";
import { Footer } from "./common/footer";

export default function Home() {
  useEffect(() => {
    window.particlesJS.load("particles-js", "/assets/particles.json");
  });
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    <>
      <div id="particles-js" className="absolute inset-0 z-10"></div>
      <div className="bg-gray-900">
        <Header />
        <main>
          <div className="relative isolate">
            <div
              className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
              aria-hidden="true"
            >
              <div
                className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
                }}
              />
            </div>
            <div className="overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <div className="mt-24 sm:mt-32 lg:mt-16">
                      <a href="#" className="inline-flex space-x-6">
                        <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                          Agile Team Player
                        </span>
                        <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                          <span>Creative-Solution</span>
                          {/* <ChevronRightIcon
                            className="h-5 w-5 text-gray-500"
                            aria-hidden="true"
                          /> */}
                        </span>
                      </a>
                    </div>
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                      Beverly Nguyen
                    </h1>
                    <h3 className="mt-5 font-medium text-5xl tracking-tight text-white">
                      I build things for the web.
                    </h3>
                    <h4 className="mt-5 font-normal text-xl tracking-tight text-gray-300">
                      I’m a front end software engineer specializing in building
                      (and occasionally designing) exceptional digital
                      experiences. Currently, I’m focused on building
                      enterprise-level application at ____.
                    </h4>
                    {/* <p className="relative mt-6 text-lg leading-8 text-gray-300">
                      Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in
                      quis cupidatat mollit aute velit. Et labore commodo nulla
                      aliqua proident mollit ullamco exercitation tempor. Sint
                      aliqua anim nulla sunt mollit id pariatur in voluptate
                      cillum.
                    </p> */}
                    <div className="mt-10 flex items-center gap-x-6">
                      <a
                        href="#"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Get started
                      </a>
                      <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-white"
                      >
                        Live demo <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                  <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content SEction  */}
            <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our mission
                </h2>
                <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                  <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                    <p className="text-xl leading-8 text-gray-600">
                      Aliquet nec orci mattis amet quisque ullamcorper neque,
                      nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                      aliquam. Quisque id at vitae feugiat egestas ac. Diam
                      nulla orci at in viverra scelerisque eget. Eleifend
                      egestas fringilla sapien.
                    </p>
                    <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                      <p>
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed
                        eget risus enim. Mattis mauris semper sed amet vitae sed
                        turpis id. Id dolor praesent donec est. Odio penatibus
                        risus viverra tellus varius sit neque erat velit.
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed
                        eget risus enim. Mattis mauris semper sed amet vitae sed
                        turpis id.
                      </p>
                      <p className="mt-10">
                        Et vitae blandit facilisi magna lacus commodo. Vitae
                        sapien duis odio id et. Id blandit molestie auctor
                        fermentum dignissim. Lacus diam tincidunt ac cursus in
                        vel. Mauris varius vulputate et ultrices hac adipiscing
                        egestas. Iaculis convallis ac tempor et ut. Ac lorem vel
                        integer orci.
                      </p>
                    </div>
                  </div>
                  <div className="lg:flex lg:flex-auto lg:justify-center">
                    <dl className="w-64 space-y-8 xl:w-80">
                      {/* {stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="flex flex-col-reverse gap-y-4"
                        >
                          <dt className="text-base leading-7 text-gray-600">
                            {stat.label}
                          </dt>
                          <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                            {stat.value}
                          </dd>
                        </div>
                      ))} */}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
