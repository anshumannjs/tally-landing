import React from 'react'

export default function FaqComponent() {
    return (
        <div>
            <section class="text-gray-700 bg-white">
                <div class="container px-5 py-24 mx-auto">
                    <div class="text-center mb-20">
                        <h1 class="sm:text-3xl text-2xl text-center font-bold text-[#001B41] mb-2">
                            Frequently Asked Question
                        </h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            The most common questions about how our business works and what
                            can do for you.
                        </p>
                    </div>
                    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div class="w-full lg:w-1/2 px-4 py-2">
                            <details class="mb-4">
                                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                   What is Glassball?
                                </summary>

                                <span>
                                  Glassball is a Windows-based desktop Application, that connects with your Tally. You can use our Software to import clients Bank Documents, Label them and submit as Ledger to tally.
                                </span>
                            </details>
                            <details class="mb-4">
                                <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                                   What type of documents can i upload?
                                </summary>

                                <span>
                                    We Support Bank Statements of All Major Indian Nationalized Banks. For Full list of supported documents - Please see this <ul>list</ul>
                                </span>
                            </details>
                            <details class="mb-4">
                                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                 How does Labelling work?
                                </summary>

                                <span>
                                   You can Use Vouchers, present in a company to only Label. This ensures, no new Labels are brought back into your clients company
                                </span>
                            </details>
                        </div>
                        <div class="w-full lg:w-1/2 px-4 py-2">
                            <details class="mb-4">
                                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    Can I create Custom Vouchers?
                                </summary>
                                

                                <span class="px-4 py-2">
                                   Custom Voucher creation is not supported at this point and will have to be created in Tally.
                                </span>
                            </details>
                            <details class="mb-4">
                                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    What is an Activation Code?
                                </summary>

                                <span class="px-4 py-2">
                                    Acitivatio is your license key to use this software. You need to enter them during installtion of software
                                </span>
                            </details>
                            <details class="mb-4">
                                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    How can I communicate with you?
                                </summary>

                                <span class="px-4 py-2">
                                   You can reach us out on care@glassball.app. we are operational on All weekdays 9AM - 6PM.
                                </span>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  )
}
