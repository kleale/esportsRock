<template>
    <SidePanel />
    <Disclosure as="nav" v-slot="{ open }">
        <div class="mx-auto px-2 sm:px-2 lg:px-3">
            <div class="relative flex h-[50px] items-center justify-between">
                <div class="flex items-center">
                    <!-- Mobile menu button-->
                    <DisclosureButton data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation"
                        aria-controls="drawer-navigation"
                        class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span class="sr-only">Open main menu</span>
                        <img class="block h-5 w-5" src="../../assets/icons/MenuIcon.svg" aria-hidden="true" />
                    </DisclosureButton>
                </div>

                <div class="flex flex-1 items-center sm:items-stretch">
                    <a href="/" class="flex flex-shrink-0 items-center">
                        <img class="block h-8 lg:hidden w-24" src="../../assets/logo.svg" alt="esportsRock.com" />
                        <img class="hidden h-8 lg:block" src="../../assets/logo.svg" alt="esportsRock.com" />
                    </a>
                    <a href="#/game" class="flex space-x-4 items-center"> 
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="currentColor" class="text-red-500 ml-5"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_4_2932)">
                                <path
                                    d="M19.4772 17.2013C19.4772 17.9806 19.4772 18.7615 19.4772 19.5416C18.9893 19.3782 18.5077 19.192 18.0089 19.0648C17.8337 19.02 17.6224 19.1213 17.426 19.1559C17.4322 19.1889 17.4417 19.2203 17.4472 19.2533C17.6326 19.2761 17.8203 19.3012 18.0073 19.324C17.6836 19.4662 17.3663 19.5636 17.0418 19.6406C16.9082 19.6744 16.7613 19.6838 16.6262 19.6642C16.1815 19.5943 15.7487 19.4709 15.282 19.4851C15.0149 19.4953 14.7407 19.2258 14.4823 19.5448C14.4563 19.5793 14.3487 19.5448 14.2796 19.5526C13.9386 19.5943 13.6016 19.6398 13.2496 19.687C13.2386 19.6501 13.2096 19.5566 13.1671 19.4159C13.1027 19.6092 13.0996 19.753 13.0257 19.804C12.8553 19.9274 12.6526 20.0193 12.4302 19.863C12.5685 19.8119 12.6911 19.7687 12.8136 19.7255C12.2825 19.6964 11.7766 19.6925 11.2683 19.698C11.2102 19.6996 11.1041 19.7357 11.0994 19.7687C11.0499 20.0696 10.8017 19.9486 10.65 19.9635C10.5377 19.9737 10.4136 19.8543 10.2949 19.7915C10.2737 19.7813 10.2549 19.7624 10.1826 19.7074C10.1425 19.7891 10.1025 19.8724 10.0624 19.9627C9.77173 19.6721 9.45748 19.6375 9.15502 19.7302C8.97511 19.786 8.83213 19.9612 8.67265 20.0814C8.65301 20.0814 8.63259 20.0814 8.61295 20.0814C8.51082 19.8999 8.40162 19.7215 8.30892 19.5354C8.22721 19.3704 8.13058 19.3507 7.94989 19.3916C7.75584 19.4364 7.54216 19.3979 7.33711 19.3916C7.23577 19.3877 7.13521 19.3751 7.03386 19.3664C7.01972 19.3979 7.00637 19.4293 6.99301 19.4607C6.87831 19.3287 6.76361 19.1983 6.63006 19.0451C6.57899 19.1473 6.53029 19.2447 6.47294 19.3562C6.40302 19.2627 6.34645 19.1865 6.24275 19.0475C6.20583 19.214 6.18383 19.3099 6.1634 19.4042C6.07856 19.3555 5.99293 19.3083 5.90258 19.2565C5.85152 19.3193 5.80831 19.3719 5.75017 19.445C5.68968 19.3688 5.64726 19.3146 5.61112 19.2714C5.47442 19.3256 5.34951 19.3751 5.2136 19.4293C5.17432 19.3374 5.14368 19.2659 5.11147 19.1913C4.81293 19.2612 4.51912 19.3303 4.21351 19.4018C4.1868 19.3177 4.14909 19.1952 4.09567 19.0224C4.00375 19.1543 3.95112 19.2305 3.89377 19.3146C3.8207 19.2549 3.76257 19.2085 3.77514 19.2188C3.61723 19.2604 3.53003 19.306 3.4444 19.302C2.94396 19.2832 2.44431 19.2172 1.95016 19.3688C1.87238 19.3932 1.77261 19.3437 1.66812 19.3256C1.65555 19.3586 1.63277 19.4159 1.60056 19.5008C1.56049 19.3963 1.53221 19.3232 1.49686 19.2329C1.39237 19.3146 1.31303 19.3767 1.20854 19.4576C1.18576 19.3287 1.16926 19.236 1.15355 19.148C0.979141 19.1135 0.825946 19.0836 0.660182 19.0506C0.88801 18.2273 0.836945 17.4213 0.770168 16.6121C0.745028 16.3065 0.766239 15.993 0.786665 15.6859C0.797664 15.5224 0.80552 15.3323 1.05849 15.3292C1.09463 15.3292 1.16062 15.2333 1.16062 15.1823C1.16769 14.5546 1.16533 13.9284 1.16533 13.318C1.07184 13.252 0.863656 13.1758 0.860513 13.0933C0.835373 12.3321 0.845586 11.5684 0.845586 10.8056C0.904507 10.8119 0.963428 10.819 1.04042 10.8284C0.986997 10.7357 0.947716 10.6681 0.872297 10.5362C1.03178 10.5959 1.11819 10.6289 1.30046 10.6964C1.24232 10.3814 1.26746 10.0836 1.13626 9.89352C0.929647 9.59577 0.866012 9.31374 0.912364 8.96807C0.947716 8.7096 0.968928 8.43699 0.925719 8.18245C0.649969 6.55545 0.663324 4.9198 0.785094 3.28023C0.806306 2.99583 0.823589 2.71144 0.846372 2.38148C0.591048 2.50325 0.50463 2.43569 0.523485 2.21729C0.54234 1.9981 0.548625 1.77813 0.567479 1.55816C0.571407 1.51731 0.615402 1.48038 0.648397 1.43011C0.660967 1.62651 0.67118 1.79542 0.682179 1.96275C0.712032 1.96275 0.7411 1.96275 0.769382 1.96275C0.802378 1.74514 0.835373 1.52831 0.86994 1.30048C1.43244 1.55502 1.52671 1.54402 2.08607 1.2117C2.26912 1.26905 2.39874 1.33583 2.5323 1.34604C2.71063 1.3594 2.8929 1.30755 3.07123 1.32169C3.28727 1.33819 3.49939 1.41282 3.71622 1.42618C4.14595 1.45132 4.57647 1.46153 5.0062 1.4576C5.12797 1.45682 5.24895 1.38768 5.36365 1.35154C5.52156 1.43168 5.68261 1.56445 5.85859 1.5888C6.17283 1.63122 6.50122 1.64065 6.81546 1.60058C7.09671 1.56445 7.43767 1.82527 7.66393 1.45289C7.67885 1.42775 7.76527 1.45524 7.80691 1.43482C7.87369 1.40261 7.94989 1.36411 7.98996 1.30519C8.13529 1.09308 8.3207 0.998803 8.57759 1.05144C8.63573 1.06322 8.72608 1.08365 8.752 1.05458C8.95469 0.828325 9.17309 0.989376 9.38521 1.01609C9.49441 1.02944 9.6146 1.08208 9.70888 1.05222C10.0703 0.939097 10.4183 1.0263 10.7789 1.05615C11.3665 1.10486 11.8285 1.28791 12.0233 1.8944C12.2197 1.87476 12.4082 1.83548 12.5944 1.84098C12.783 1.84648 12.8843 1.75456 12.9181 1.59901C12.9472 1.4741 12.9244 1.3374 12.9244 1.18107C14.1272 1.02866 15.326 1.25413 16.5469 1.30126C16.5359 1.15907 16.5288 1.05144 16.5194 0.944596C16.5421 0.935954 16.5673 0.928098 16.5901 0.918671C16.6333 1.00666 16.6623 1.10957 16.7268 1.17871C16.7928 1.24941 16.9397 1.35154 16.9711 1.32876C17.1738 1.17478 17.3443 1.31305 17.5344 1.3429C17.7182 1.37197 17.913 1.31855 18.1024 1.3264C18.3341 1.33662 18.5737 1.33897 18.7866 1.40732C18.954 1.45996 19.0907 1.60687 19.236 1.71764C19.2792 1.75064 19.3342 1.80091 19.3389 1.84805C19.3617 2.08609 19.4466 2.35399 19.3664 2.55667C19.2407 2.88428 19.3185 3.18359 19.3405 3.49548C19.3853 4.14126 19.4324 4.78782 19.4788 5.43359C19.4788 5.51372 19.4788 5.59386 19.4788 5.67399C19.4513 6.12965 19.4238 6.58609 19.3931 7.04174C19.3609 7.53825 19.3609 7.53825 18.8896 7.59167C18.8738 7.59324 18.8621 7.61367 18.8432 7.63017C18.8526 7.66945 18.8558 7.71109 18.8707 7.74487C18.9799 7.9617 19.0365 8.14317 18.7835 8.33329C18.7049 8.393 18.7128 8.65854 18.7709 8.7913C18.8919 9.07098 19.1779 9.27996 19.1009 9.64527C19.0852 9.71519 19.1606 9.80475 19.1959 9.88331C19.2187 9.9328 19.2745 9.9823 19.2698 10.0279C19.2164 10.544 19.1559 11.0594 19.0977 11.5842C19.0239 11.6054 18.9445 11.6313 18.8613 11.6541C18.8613 11.6831 18.8613 11.7114 18.8597 11.7413C19.0255 11.7688 19.1928 11.7971 19.401 11.8316C19.401 11.9393 19.401 12.0547 19.4026 12.1718C19.4136 13.7092 19.4253 15.2459 19.4395 16.7849C19.4418 16.9232 19.4646 17.0622 19.4772 17.2013ZM10.1166 12.3179C10.148 12.2967 10.181 12.2763 10.2117 12.2551C10.3193 12.4758 10.4254 12.6989 10.5346 12.9205C10.5746 12.9983 10.6084 13.0839 10.6697 13.1412C10.7632 13.2292 10.8952 13.2787 10.98 13.373C11.1827 13.6024 11.3563 13.8562 11.5566 14.084C11.8402 14.4061 12.1427 14.7133 12.4342 15.0283C12.7736 15.3952 13.0737 15.806 13.4531 16.1234C14.0989 16.66 14.9018 16.6883 15.6992 16.6883C15.9294 16.6883 16.0676 16.6027 16.1808 16.4118C16.7519 15.4541 17.1149 14.4312 17.2107 13.3117C17.2288 13.0894 17.1644 12.9668 16.9805 12.8529C16.6262 12.6298 16.2931 12.3729 15.9325 12.1561C15.7518 12.0485 15.5318 12.006 15.337 11.918C15.2341 11.8733 15.1343 11.8073 15.0581 11.7279C14.9662 11.6344 14.9167 11.4836 14.8138 11.4129C13.7626 10.6838 12.7178 9.94616 11.6454 9.25089C9.97913 8.17146 8.45111 6.88069 6.64341 6.02202C6.61513 6.00866 6.62063 5.93717 6.59235 5.91282C6.54364 5.86804 6.43915 5.7989 6.43051 5.80754C6.24904 6.00159 6.22861 5.75098 6.16733 5.69913C6.01021 5.56793 5.89708 5.3841 5.73682 5.25761C5.44693 5.029 5.13582 4.82788 4.83493 4.61341C4.18523 4.15147 3.37055 4.20882 2.75856 4.76425C2.80176 4.81767 2.84183 4.87581 2.88897 4.92609C4.24729 6.38026 5.60405 7.83364 6.9663 9.28231C7.14464 9.47322 7.28526 9.72618 7.60186 9.73561C7.65057 9.73718 7.73149 9.79453 7.73935 9.83696C7.82576 10.2777 8.217 10.4851 8.46918 10.7978C8.95076 11.3956 9.56511 11.8725 10.0208 12.4963C10.0938 12.5968 10.207 12.6667 10.3028 12.75C10.3256 12.7272 10.3507 12.7037 10.3735 12.6809C10.2879 12.5607 10.203 12.4381 10.1166 12.3179ZM7.97346 16.0771C6.68348 14.8272 5.45242 13.6354 4.19701 12.4201C4.06896 12.6958 3.95347 12.9276 3.8537 13.1664C3.56695 13.8459 3.28177 14.5271 3.00681 15.2137C2.92903 15.4085 2.93925 15.6065 3.13408 15.7526C3.63059 16.1203 4.12709 16.4887 4.61889 16.8548C4.864 16.6828 4.96063 16.7032 5.0062 16.9884C5.97564 16.6906 6.93566 16.3953 7.97346 16.0771ZM11.753 5.1437C12.8427 5.97959 13.8718 6.77228 14.9049 7.56418C14.9167 7.55004 14.9324 7.53589 14.9458 7.52254C14.9151 7.4589 14.8876 7.39527 14.8586 7.33085C14.8829 7.31907 14.9081 7.30649 14.9324 7.29471C14.9678 7.3827 14.9819 7.49583 15.0448 7.55318C15.1524 7.65059 15.2914 7.71266 15.4179 7.78965C15.4611 7.70873 15.5271 7.63252 15.5421 7.54768C15.6403 6.97732 15.7259 6.40461 15.8139 5.8319C15.8382 5.66378 15.8555 5.49251 15.8846 5.2419C15.7864 5.34717 15.7542 5.38331 15.7204 5.41945C15.7063 5.4061 15.6898 5.39274 15.674 5.3786C15.7385 5.30475 15.8013 5.22933 15.883 5.13427C15.5963 4.92766 15.3197 4.69512 15.0102 4.52385C14.8476 4.43429 14.6111 4.39187 14.4351 4.43351C13.5631 4.64248 12.6997 4.88838 11.753 5.1437Z"
                                    fill="currentColor" />
                            </g>
                        </svg>
                    </a href="/">
                    <div class="hidden sm:ml-6 sm:block">
                        <div id="mega-menu-icons"
                            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                            <ul
                                class="flex flex-col mt-4 text-xs uppercase font-light md:flex-row md:mt-0 md:space-x-4 rtl:space-x-reverse">
                                <li>
                                    <a href="#/news" class="block py-2 px-1 text-white font-light uppercase" aria-current="page">News</a>
                                </li>
                                <li>
                                    <button id="mega-menu-icons-dropdown-button"
                                        data-dropdown-toggle="mega-menu-icons-dropdown"
                                        class="flex items-center justify-between w-full py-2 px-3 text-white font-light uppercase">
                                        Articles & interviews
                                        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    <div id="mega-menu-icons-dropdown"
                                        class="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                                        <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                            <ul class="space-y-4" aria-labelledby="mega-menu-icons-dropdown-button">
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                        <span class="sr-only">About us</span>
                                                        <svg class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor" viewBox="0 0 20 20">
                                                            <path
                                                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                                        </svg>
                                                        About Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                        <span class="sr-only">Library</span>
                                                        <svg class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor" viewBox="0 0 20 20">
                                                            <path
                                                                d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z" />
                                                            <path
                                                                d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z" />
                                                            <path
                                                                d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z" />
                                                        </svg>
                                                        Library
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                        <span class="sr-only">Resources</span>
                                                        <svg class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor" viewBox="0 0 18 18">
                                                            <path
                                                                d="M15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783ZM6 2h6a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2Zm7 5H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Z" />
                                                            <path
                                                                d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                                                        </svg>
                                                        Resources
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                        <span class="sr-only">Pro Version</span>
                                                        <svg class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor" viewBox="0 0 20 20">
                                                            <path
                                                                d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z" />
                                                        </svg>
                                                        Pro Version
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                            <ul class="space-y-4">
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                        <span class="sr-only">Blog</span>
                                                        <svg class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor" viewBox="0 0 20 20">
                                                            <path
                                                                d="M19 4h-1a1 1 0 1 0 0 2v11a1 1 0 0 1-2 0V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1ZM3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm9 13H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z" />
                                                            <path d="M6 5H5v1h1V5Z" />
                                                        </svg>
                                                        Blog
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                        <span class="sr-only">Newsletter</span>
                                                        <svg class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor" viewBox="0 0 20 20">
                                                            <path
                                                                d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                                        </svg>
                                                        Newsletter
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                        <span class="sr-only">Playground</span>
                                                        <svg class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor" viewBox="0 0 18 18">
                                                            <path
                                                                d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10ZM17 13h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z" />
                                                        </svg>
                                                        Playground
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                        <span class="sr-only">License</span>
                                                        <svg class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor" viewBox="0 0 14 20">
                                                            <path
                                                                d="M13.383.076a1 1 0 0 0-1.09.217L11 1.586 9.707.293a1 1 0 0 0-1.414 0L7 1.586 5.707.293a1 1 0 0 0-1.414 0L3 1.586 1.707.293A1 1 0 0 0 0 1v18a1 1 0 0 0 1.707.707L3 18.414l1.293 1.293a1 1 0 0 0 1.414 0L7 18.414l1.293 1.293a1 1 0 0 0 1.414 0L11 18.414l1.293 1.293A1 1 0 0 0 14 19V1a1 1 0 0 0-.617-.924ZM10 15H4a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0-4H4a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2Zm0-4H4a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                                                        </svg>
                                                        License
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="p-4 text-gray-900 dark:text-white">
                                            <ul class="space-y-4">
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                        <span class="sr-only">Contact Us</span>
                                                        <svg class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor" viewBox="0 0 14 20">
                                                            <path
                                                                d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z" />
                                                        </svg>
                                                        Contact Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                        <span class="sr-only">Support Center</span>
                                                        <svg class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor" viewBox="0 0 21 21">
                                                            <path
                                                                d="m5.4 2.736 3.429 3.429A5.046 5.046 0 0 1 10.134 6c.356.01.71.06 1.056.147l3.41-3.412c.136-.133.287-.248.45-.344A9.889 9.889 0 0 0 10.269 1c-1.87-.041-3.713.44-5.322 1.392a2.3 2.3 0 0 1 .454.344Zm11.45 1.54-.126-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.029.023.049.054.078.077.236.194.454.41.65.645.034.038.078.067.11.107l2.927-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.024.03-.057.052-.081.082a4.963 4.963 0 0 1-.633.639c-.041.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.442-4.763a3.036 3.036 0 0 0-1.383-1.1l-.012-.007a2.955 2.955 0 0 0-1-.213H10a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.01.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .489 1.716c.009.014.022.026.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.318.129.657.2 1 .213.392.015.784-.05 1.15-.192.012-.005.02-.013.033-.018a3.011 3.011 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.35.447L14.84 9.823c.112.428.166.869.16 1.311-.01.356-.06.709-.147 1.054l3.413 3.412c.132.134.249.283.347.444A9.88 9.88 0 0 0 20 11.269a9.912 9.912 0 0 0-1.386-5.319ZM14.6 19.264l-3.421-3.421c-.385.1-.781.152-1.18.157h-.134c-.356-.01-.71-.06-1.056-.147l-3.41 3.412a2.503 2.503 0 0 1-.443.347A9.884 9.884 0 0 0 9.732 21H10a9.9 9.9 0 0 0 5.044-1.388 2.519 2.519 0 0 1-.444-.348ZM1.735 15.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L1.735 6.4a2.507 2.507 0 0 1-.35-.447 9.889 9.889 0 0 0 0 10.1c.1-.164.217-.316.35-.453Zm5.101-.758a4.957 4.957 0 0 1-.651-.645c-.033-.038-.077-.067-.11-.107L3.15 17.017a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.03-.018-.05-.053-.078-.076ZM6.08 7.914c.03-.037.07-.063.1-.1.183-.22.384-.423.6-.609.047-.04.082-.092.129-.13L3.983 4.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707L6.08 7.914Z" />
                                                        </svg>
                                                        Support Center
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                        <span class="sr-only">Terms</span>
                                                        <svg class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor" viewBox="0 0 18 20">
                                                            <path
                                                                d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                                        </svg>
                                                        Terms
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#/news" class="block py-2 px-1 text-white font-light uppercase">Bets</a>
                                </li>
                                <li>
                                    <a href="#/tours" class="block py-2 px-1 text-white font-light uppercase">Tournaments</a>
                                </li>
                                <li>
                                    <a href="#/matches" class="block py-2 px-1 text-white font-light uppercase">Matches</a>
                                </li>
                                <li>
                                    <a href="#/teams" class="block py-2 px-1 text-white font-light uppercase">Teams</a>
                                </li>
                                <li>
                                    <a href="#/streams" class="block py-2 px-1 text-white font-light uppercase">Stream channels</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                

                <div class="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 md:absolute md:right-0">
                    <button type="button"
                        class="rounded-full p-1 mx-1 text-gray-400 hover:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span class="sr-only">View notifications</span>
                        <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
                    </button>

                    <button type="button"
                        class="rounded-full p-1 mx-1 text-gray-400 hover:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span class="sr-only">View notifications</span>
                        <BellIcon class="h-5 w-5" aria-hidden="true" />
                    </button>

                    <button id="theme-toggle" type="button"
                        class="rounded-full p-1 mx-1 text-gray-400 hover:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <SunIcon id="theme-toggle-dark-icon" class="w-5 h-5" aria-hidden="true" />
                        <MoonIcon id="theme-toggle-light-icon" class="h-5 w-5 hidden" aria-hidden="true" />
                    </button>

                    <!-- Profile dropdown -->
                    <Menu as="div" v-if="isAuth" class="relative ml-1">
                        <div>
                            <MenuButton
                                class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="" />
                                <!-- <svg aria-hidden="true"
                                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clip-rule="evenodd"></path>
                                </svg> -->
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                            <MenuItems
                                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <MenuItem v-slot="{ active }">
                                <a href="#" :class="[
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700',
                                ]">
                                    Профиль
                                </a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#" :class="[
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700',
                                ]">
                                    Настройки
                                </a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#" :class="[
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700',
                                ]">
                                    Выйти
                                </a>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>

                    <button v-else type="submit" @click="() => login()"
                        class="group ml-2 relative flex w-full justify-center rounded-md border border-transparent bg-lime-500 py-1 px-3 text-sm text-black hover:bg-lime-400 focus:outline-none ">
                        Log in
                    </button>
                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            DisclosurePanel
            <!-- <div class="space-y-1 px-2 pt-2 pb-3">
                <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
                    :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
                    :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
            </div> -->
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/vue";
import { BellIcon } from "@heroicons/vue/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { SunIcon } from "@heroicons/vue/24/outline";
import { MoonIcon } from "@heroicons/vue/24/outline";
import SidePanel from "./SidePanel.vue";
import { LockClosedIcon } from "@heroicons/vue/20/solid";
import { ref } from "vue";

const navigation = [
    { name: "News", href: "/", current: false },
    { name: "Articles & interviews", href: "/match/1", current: false },
    { name: "Bets", href: "/match/1", current: false },
    {
        name: "Tournaments", href: "/match/1", current: false, sublink: {
            name: "Events", href: "/match/1", current: false, icon: '<svg class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20"><path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z" /></svg>'
        }
    },
    { name: "Matches", href: "/match/1", current: false },
    { name: "Teams", href: "/match/1", current: false },
    { name: "Streams", href: "/match/1", current: false },
];

const isAuth = ref(false);
const login = () => {
  isAuth.value = !isAuth.value
  console.log(isAuth)
}
</script>
