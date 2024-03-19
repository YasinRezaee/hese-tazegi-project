import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const apiUrl = "http://localhost:3000/";
  const [categories, setCategories] = useState([]);
  const [pages, setPages] = useState([]);
  const fetchCategoriesData = async () => {
    try {
      const response = await axios.get(`${apiUrl}categories`);
      setCategories(response.data);
    } catch (error) {
      alert("Error fetching categories data:", error);
    }
  };
  const fetchPagesData = async () => {
    try {
      const response = await axios.get(`${apiUrl}pages`);
      setPages(response.data);
    } catch (error) {
      alert("Error fetching pages data:", error);
    }
  };

  useEffect(() => {
    fetchCategoriesData();
    fetchPagesData();
  }, []);

  return (
    <header className="left-0 z-40 w-full transition-all duration-300 top-0 absolute bg-transparent py-2">
      <div className="px-4 2xl:px-5 3xl:px-7.5 4xl:px-14">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative flex items-center justify-around">
              <div className="flex items-center">
                <div className="mr-5 w-full max-w-[180px] lg:max-w-[150px] 2xl:max-w-[180px]">
                  <a name="TailGrids" aria-label="TailGrids" href="/">
                    <svg
                      width="118"
                      height="17"
                      viewBox="0 0 118 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.86816 0.359375H4.59668L8.61426 11.8428L12.6318 0.359375H15.3604L9.70996 16H7.51855L1.86816 0.359375ZM0.396484 0.359375H3.11426L3.6084 11.5527V16H0.396484V0.359375ZM14.1143 0.359375H16.8428V16H13.6201V11.5527L14.1143 0.359375ZM30.1631 13.4863V16H21.8379V13.4863H30.1631ZM22.8906 0.359375V16H19.668V0.359375H22.8906ZM29.0781 6.72949V9.17871H21.8379V6.72949H29.0781ZM30.1523 0.359375V2.88379H21.8379V0.359375H30.1523ZM44.4395 7.8252V14.0234C44.196 14.3171 43.82 14.6357 43.3115 14.9795C42.8031 15.3161 42.1478 15.6061 41.3457 15.8496C40.5436 16.0931 39.5732 16.2148 38.4346 16.2148C37.4248 16.2148 36.5046 16.0501 35.6738 15.7207C34.8431 15.3841 34.127 14.8936 33.5254 14.249C32.931 13.6045 32.4727 12.8167 32.1504 11.8857C31.8281 10.9476 31.667 9.87695 31.667 8.67383V7.69629C31.667 6.49316 31.821 5.42253 32.1289 4.48438C32.444 3.54622 32.8916 2.75488 33.4717 2.11035C34.0518 1.46582 34.7428 0.97526 35.5449 0.638672C36.347 0.302083 37.2386 0.133789 38.2197 0.133789C39.5804 0.133789 40.6976 0.355794 41.5713 0.799805C42.445 1.23665 43.111 1.84538 43.5693 2.62598C44.0348 3.39941 44.3213 4.28743 44.4287 5.29004H41.3027C41.224 4.76009 41.0736 4.29818 40.8516 3.9043C40.6296 3.51042 40.3109 3.20247 39.8955 2.98047C39.4873 2.75846 38.9574 2.64746 38.3057 2.64746C37.7686 2.64746 37.2887 2.75846 36.8662 2.98047C36.4508 3.19531 36.0999 3.514 35.8135 3.93652C35.527 4.35905 35.3086 4.88184 35.1582 5.50488C35.0078 6.12793 34.9326 6.85124 34.9326 7.6748V8.67383C34.9326 9.49023 35.0114 10.2135 35.1689 10.8438C35.3265 11.4668 35.5592 11.9932 35.8672 12.4229C36.1823 12.8454 36.569 13.1641 37.0273 13.3789C37.4857 13.5938 38.0192 13.7012 38.6279 13.7012C39.1364 13.7012 39.5589 13.6582 39.8955 13.5723C40.2393 13.4863 40.515 13.3825 40.7227 13.2607C40.9375 13.1318 41.1022 13.0101 41.2168 12.8955V10.124H38.2734V7.8252H44.4395ZM53.3984 3.03418L49.1445 16H45.7178L51.5293 0.359375H53.71L53.3984 3.03418ZM56.9326 16L52.668 3.03418L52.3242 0.359375H54.5264L60.3701 16H56.9326ZM56.7393 10.1777V12.7021H48.4785V10.1777H56.7393ZM61.7773 14.5068C61.7773 14.0485 61.9349 13.6654 62.25 13.3574C62.5723 13.0495 62.9984 12.8955 63.5283 12.8955C64.0583 12.8955 64.4808 13.0495 64.7959 13.3574C65.1182 13.6654 65.2793 14.0485 65.2793 14.5068C65.2793 14.9652 65.1182 15.3483 64.7959 15.6562C64.4808 15.9642 64.0583 16.1182 63.5283 16.1182C62.9984 16.1182 62.5723 15.9642 62.25 15.6562C61.9349 15.3483 61.7773 14.9652 61.7773 14.5068ZM71.0371 6.8584V16H67.9434V4.37695H70.8438L71.0371 6.8584ZM70.5859 9.78027H69.748C69.748 8.9209 69.859 8.14746 70.0811 7.45996C70.3031 6.7653 70.6146 6.17448 71.0156 5.6875C71.4167 5.19336 71.8929 4.81738 72.4443 4.55957C73.0029 4.2946 73.626 4.16211 74.3135 4.16211C74.8577 4.16211 75.3555 4.24089 75.8066 4.39844C76.2578 4.55599 76.6445 4.80664 76.9668 5.15039C77.2962 5.49414 77.5469 5.94889 77.7188 6.51465C77.8978 7.0804 77.9873 7.77148 77.9873 8.58789V16H74.8721V8.57715C74.8721 8.06152 74.8005 7.66048 74.6572 7.37402C74.514 7.08757 74.3027 6.88704 74.0234 6.77246C73.7513 6.65072 73.4147 6.58984 73.0137 6.58984C72.5983 6.58984 72.2367 6.6722 71.9287 6.83691C71.6279 7.00163 71.3773 7.23079 71.1768 7.52441C70.9834 7.81087 70.8366 8.14746 70.7363 8.53418C70.6361 8.9209 70.5859 9.33626 70.5859 9.78027ZM85.6895 16.2148C84.7871 16.2148 83.9779 16.0716 83.2617 15.7852C82.5456 15.4915 81.9368 15.0869 81.4355 14.5713C80.9414 14.0557 80.5618 13.4577 80.2969 12.7773C80.0319 12.0898 79.8994 11.3594 79.8994 10.5859V10.1562C79.8994 9.27539 80.0247 8.46973 80.2754 7.73926C80.526 7.00879 80.8841 6.375 81.3496 5.83789C81.8223 5.30078 82.3952 4.889 83.0684 4.60254C83.7415 4.30892 84.5007 4.16211 85.3457 4.16211C86.1693 4.16211 86.8997 4.29818 87.5371 4.57031C88.1745 4.84245 88.708 5.22917 89.1377 5.73047C89.5745 6.23177 89.904 6.83333 90.126 7.53516C90.348 8.22982 90.459 9.00326 90.459 9.85547V11.1445H81.2207V9.08203H87.4189V8.8457C87.4189 8.41602 87.3402 8.03288 87.1826 7.69629C87.0322 7.35254 86.8031 7.0804 86.4951 6.87988C86.1872 6.67936 85.7933 6.5791 85.3135 6.5791C84.9053 6.5791 84.5544 6.66862 84.2607 6.84766C83.9671 7.02669 83.7272 7.27734 83.541 7.59961C83.362 7.92188 83.2259 8.30143 83.1328 8.73828C83.0469 9.16797 83.0039 9.64062 83.0039 10.1562V10.5859C83.0039 11.0514 83.0684 11.4811 83.1973 11.875C83.3333 12.2689 83.5231 12.609 83.7666 12.8955C84.0173 13.182 84.318 13.404 84.6689 13.5615C85.027 13.7191 85.4316 13.7979 85.8828 13.7979C86.4414 13.7979 86.9606 13.6904 87.4404 13.4756C87.9274 13.2536 88.3464 12.9206 88.6973 12.4766L90.2012 14.1094C89.9577 14.4603 89.6247 14.7969 89.2021 15.1191C88.7868 15.4414 88.2855 15.7064 87.6982 15.9141C87.111 16.1146 86.4414 16.2148 85.6895 16.2148ZM95.54 12.9922L97.957 4.37695H99.9229L99.2891 7.76074L96.8721 16H95.2285L95.54 12.9922ZM94.3154 4.37695L96.0449 12.9814L96.2061 16H94.2725L91.3291 4.37695H94.3154ZM102.136 12.8418L103.822 4.37695H106.819L103.876 16H101.953L102.136 12.8418ZM100.191 4.37695L102.598 12.9277L102.931 16H101.276L98.8594 7.77148L98.2471 4.37695H100.191ZM114.661 12.7881C114.661 12.5661 114.597 12.3656 114.468 12.1865C114.339 12.0075 114.099 11.8428 113.748 11.6924C113.404 11.5348 112.907 11.3916 112.255 11.2627C111.668 11.1338 111.12 10.9727 110.611 10.7793C110.11 10.5788 109.673 10.3389 109.301 10.0596C108.936 9.78027 108.649 9.45085 108.441 9.07129C108.234 8.68457 108.13 8.24414 108.13 7.75C108.13 7.26302 108.234 6.80469 108.441 6.375C108.656 5.94531 108.961 5.56576 109.354 5.23633C109.756 4.89974 110.243 4.63835 110.815 4.45215C111.396 4.25879 112.047 4.16211 112.771 4.16211C113.78 4.16211 114.647 4.32324 115.37 4.64551C116.101 4.96777 116.659 5.41178 117.046 5.97754C117.44 6.53613 117.637 7.1735 117.637 7.88965H114.543C114.543 7.58887 114.479 7.32031 114.35 7.08398C114.228 6.84049 114.035 6.65072 113.77 6.51465C113.512 6.37142 113.175 6.2998 112.76 6.2998C112.416 6.2998 112.119 6.36068 111.868 6.48242C111.618 6.59701 111.424 6.75456 111.288 6.95508C111.159 7.14844 111.095 7.36328 111.095 7.59961C111.095 7.77865 111.131 7.93978 111.202 8.08301C111.281 8.21908 111.406 8.3444 111.578 8.45898C111.75 8.57357 111.972 8.68099 112.244 8.78125C112.523 8.87435 112.867 8.96029 113.275 9.03906C114.113 9.21094 114.862 9.43652 115.521 9.71582C116.179 9.98796 116.702 10.3604 117.089 10.833C117.476 11.2985 117.669 11.9108 117.669 12.6699C117.669 13.1855 117.554 13.6582 117.325 14.0879C117.096 14.5176 116.767 14.8936 116.337 15.2158C115.907 15.5309 115.392 15.778 114.79 15.957C114.196 16.1289 113.526 16.2148 112.781 16.2148C111.7 16.2148 110.783 16.0215 110.031 15.6348C109.286 15.248 108.721 14.7575 108.334 14.1631C107.954 13.5615 107.765 12.9456 107.765 12.3154H110.697C110.712 12.738 110.819 13.0781 111.02 13.3359C111.227 13.5938 111.489 13.7799 111.804 13.8945C112.126 14.0091 112.473 14.0664 112.846 14.0664C113.247 14.0664 113.58 14.0127 113.845 13.9053C114.11 13.7907 114.31 13.6403 114.446 13.4541C114.59 13.2607 114.661 13.0387 114.661 12.7881Z"
                        fill="#FC4308"
                      />
                    </svg>
                  </a>
                </div>
                <button
                  className="absolute right-0 top-1/2 block -translate-y-1/2 cursor-pointer bg-transparent lg:hidden"
                  name="mobileMenuButton"
                  aria-label="mobileMenuButton"
                >
                  <span className="relative mx-auto my-2 block h-[2px] w-8 bg-gray-900 transition-all duration-300 dark:bg-white  "></span>
                  <span className="relative mx-auto my-2 block h-[2px] w-8 bg-gray-900 transition-all duration-300 dark:bg-white "></span>
                  <span className="relative mx-auto my-2 block h-[2px] w-8 bg-gray-900 transition-all duration-300 dark:bg-white "></span>
                </button>
                <nav className="header-navbar absolute right-0 z-40 mt-4 w-full max-w-[400px] rounded bg-white py-2 shadow-features duration-300 xs:max-w-[400px] lg:static lg:mt-0 lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none dark:bg-dark-2 lg:dark:bg-transparent invisible top-[120%] opacity-0 lg:visible lg:opacity-100 ">
                  <ul className="items-center justify-center py-2 lg:flex lg:py-0">
                    <li className="group relative px-4 lg:px-2 lg:py-5 text-[#0F172A] dark:text-dark-text">
                      <NavLink
                        to="/"
                        className="text-[#0F172A] dark:text-dark-text flex w-full cursor-pointer items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium duration-300 group-hover:bg-primary/5 group-hover:text-primary hover:text-primary dark:group-hover:bg-dark-2 dark:group-hover:text-white dark:hover:text-white"
                      >
                        Categories
                        <span className="duration-300 lg:group-hover:rotate-180 false">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                          >
                            <path d="M12.0002 13.172L16.9502 8.22198L18.3642 9.63598L12.0002 16L5.63623 9.63598L7.05023 8.22198L12.0002 13.172Z"></path>
                          </svg>
                        </span>
                      </NavLink>
                      <div className="hidden lg:grid dropdown-menu left-0 top-full rounded-md border border-transparent p-4 pb-2 scrollbar-thin scrollbar-track-stroke scrollbar-thumb-primary scrollbar-track-rounded scrollbar-thumb-rounded lg:invisible lg:absolute lg:top-[96%] lg:max-h-[400px] lg:w-[950px] lg:grid-cols-3 lg:gap-x-[18px] lg:overflow-y-auto lg:rounded-xl lg:bg-white lg:opacity-0 lg:shadow-[0px_10px_40px_rgba(0,0,0,0.05)] lg:duration-300 lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 dark:scrollbar-track-dark-stroke dark:lg:border-[#272741] dark:lg:bg-dark-2 dark:lg:shadow-[0px_10px_50px_rgba(0,0,0,0.15)]">
                        {categories.map((category) => (
                          <a
                            key={category.id}
                            className="flex group items-center rounded-lg p-3 duration-300 hover:bg-[#F8F9FF] lg:mb-2 dark:hover:bg-white/5"
                          >
                            <img
                              className="object-fill h-24 w-24"
                              src={category.image}
                              alt={category.name}
                            />
                            <div>
                              <strong className="hover:text-red">
                                {category.name}
                              </strong>
                              <p className="hover:text-red">{category.news}</p>
                              <p className="hover:text-red">
                                {category.article}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </li>
                    {/* //////////////////////////////////////////////////////////////////////////////////// */}
                    <li className="group relative px-4 lg:px-2 lg:py-5 text-[#0F172A] dark:text-dark-text">
                      <button className=" text-[#0F172A] dark:text-dark-text flex w-full cursor-pointer items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium duration-300 group-hover:bg-primary/5 group-hover:text-primary hover:text-primary dark:group-hover:bg-dark-2 dark:group-hover:text-white dark:hover:text-white">
                        Pages
                        <span className="duration-300 lg:group-hover:rotate-180 false ">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                          >
                            <path d="M12.0002 13.172L16.9502 8.22198L18.3642 9.63598L12.0002 16L5.63623 9.63598L7.05023 8.22198L12.0002 13.172Z"></path>
                          </svg>
                        </span>
                      </button>
                      <div className="hidden lg:grid dropdown-menu left-0 top-full rounded-md border border-transparent p-4 pb-2 scrollbar-thin scrollbar-track-stroke scrollbar-thumb-primary scrollbar-track-rounded scrollbar-thumb-rounded lg:invisible lg:absolute lg:top-[96%] lg:max-h-[450px] lg:w-[150px] lg:gap-x-[18px] lg:overflow-y-auto lg:rounded-xl lg:bg-white lg:opacity-0 lg:shadow-[0px_10px_40px_rgba(0,0,0,0.05)] lg:duration-300 lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 dark:scrollbar-track-dark-stroke dark:lg:border-[#272741] dark:lg:bg-dark-2 dark:lg:shadow-[0px_10px_50px_rgba(0,0,0,0.15)]">
                        {pages.map((page) => (
                          <div key={page.id} class="flex flex-col">
                            <div className="hover:text-red mt-1">
                              {page.menu}
                            </div>
                          </div>
                        ))}
                      </div>
                    </li>
                    <li className="group relative px-4 lg:px-2 lg:py-5 text-[#0F172A] dark:text-dark-text">
                      <NavLink
                        to="/contact-us"
                        className="flex items-center rounded-lg px-2.5 py-1.5 text-sm font-medium duration-300 group-hover:bg-primary/5 group-hover:text-primary dark:group-hover:bg-dark-2 dark:group-hover:text-white"
                        activeClassName="your-active-class-name"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                    <li className="group relative px-4 lg:px-2 lg:py-5 text-[#0F172A] dark:text-dark-text">
                      <NavLink
                        exact
                        to="/about-us"
                        className="flex items-center rounded-lg px-2.5 py-1.5 text-sm font-medium duration-300 group-hover:bg-primary/5 group-hover:text-primary dark:group-hover:bg-dark-2 dark:group-hover:text-white"
                        activeClassName="text-primary" // You can customize this based on your styling
                      >
                        About Us
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="flex justify-around  lg:pr-0 ">
                <div class="flex justify-around border-solid border-2 border-slate-300 rounded-lg px-5 py-1 w-80">
                  <input
                    id="search"
                    name="search"
                    class="outline-none"
                    placeholder="Search anything..."
                    type="search"
                  />
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5312 18.3438C21.1172 18.9688 21.1172 19.9453 20.5312 20.5703C19.9062 21.1562 18.9297 21.1562 18.3047 20.5703L13.6562 15.8828C12.0547 16.9375 10.1016 17.4844 7.99219 17.2109C4.39844 16.7031 1.50781 13.7734 1.03906 10.2188C0.375 4.90625 4.86719 0.414062 10.1797 1.07812C13.7344 1.54688 16.6641 4.4375 17.1719 8.03125C17.4453 10.1406 16.8984 12.0938 15.8438 13.6562L20.5312 18.3438ZM4.08594 9.125C4.08594 11.8984 6.3125 14.125 9.08594 14.125C11.8203 14.125 14.0859 11.8984 14.0859 9.125C14.0859 6.39062 11.8203 4.125 9.08594 4.125C6.3125 4.125 4.08594 6.39062 4.08594 9.125Z"
                      fill="#3E3232"
                    />

                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="group relative px-4 lg:px-2 text-[#0F172A] dark:text-dark-text">
                    <button className=" text-[#0F172A] dark:text-dark-text flex w-full cursor-pointer items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium duration-300 group-hover:bg-primary/5 group-hover:text-primary hover:text-primary dark:group-hover:bg-dark-2 dark:group-hover:text-white dark:hover:text-white">
                      Behzad
                      <span className="duration-300 lg:group-hover:rotate-180 false ">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="fill-current"
                        >
                          <path d="M12.0002 13.172L16.9502 8.22198L18.3642 9.63598L12.0002 16L5.63623 9.63598L7.05023 8.22198L12.0002 13.172Z"></path>
                        </svg>
                      </span>
                    </button>
                    <div className="hidden lg:grid dropdown-menu left-0 top-full rounded-md border border-transparent p-4 pb-2 scrollbar-thin scrollbar-track-stroke scrollbar-thumb-primary scrollbar-track-rounded scrollbar-thumb-rounded lg:invisible lg:absolute lg:top-[96%] lg:max-h-[450px] lg:w-[150px] lg:gap-x-[18px] lg:overflow-y-auto lg:rounded-xl lg:bg-white lg:opacity-0 lg:shadow-[0px_10px_40px_rgba(0,0,0,0.05)] lg:duration-300 lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 dark:scrollbar-track-dark-stroke dark:lg:border-[#272741] dark:lg:bg-dark-2 dark:lg:shadow-[0px_10px_50px_rgba(0,0,0,0.15)]">
                      <ul>
                        <li>profile</li>
                        <li>Marked</li>
                        <li>Marked</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
