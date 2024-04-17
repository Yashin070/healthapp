import React from 'react';

const NutritionIcon = ({ ...props }) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1862_4470)">
      <path
        d="M9.47068 7.66842H10.5725V8.77029C10.5725 9.72554 11.3497 10.5027 12.3049 10.5027H13.6744C14.6296 10.5027 15.4068 9.72554 15.4068 8.77029V7.23532C15.4068 6.99614 15.2128 6.80222 14.9737 6.80222C14.7345 6.80222 14.5406 6.99614 14.5406 7.23532V8.77029C14.5406 9.24789 14.152 9.63649 13.6744 9.63649H12.3049C11.8273 9.63649 11.4387 9.24789 11.4387 8.77029V7.23532C11.4387 6.99614 11.2448 6.80222 11.0056 6.80222H9.47068C8.99308 6.80222 8.60448 6.41362 8.60448 5.93602V4.56667C8.60448 4.08906 8.99308 3.70046 9.47068 3.70046H11.0056C11.2448 3.70046 11.4387 3.50654 11.4387 3.26736V1.7324C11.4387 1.2548 11.8273 0.866201 12.3049 0.866201H13.6744C14.152 0.866201 14.5406 1.2548 14.5406 1.7324V3.26736C14.5406 3.50654 14.7345 3.70046 14.9737 3.70046H16.5086C16.9862 3.70046 17.3748 4.08906 17.3748 4.56667V5.93608C17.3748 6.25825 17.1976 6.55205 16.9123 6.70277C16.7008 6.81446 16.6199 7.07648 16.7317 7.288C16.8434 7.49957 17.1054 7.5804 17.3169 7.46866C17.8869 7.16754 18.241 6.58031 18.241 5.93608V4.56667C18.241 3.61141 17.4639 2.83426 16.5086 2.83426H15.4068V1.7324C15.4068 0.777145 14.6296 0 13.6744 0H12.3049C11.3497 0 10.5725 0.777145 10.5725 1.7324V2.83426H9.47068C8.51543 2.83426 7.73828 3.61141 7.73828 4.56667V5.93608C7.73828 6.89128 8.51548 7.66842 9.47068 7.66842Z"
        fill="currentColor"
      />
      <path
        d="M24.9244 10.0736C24.6744 9.33086 23.9844 8.81845 23.1695 8.83593C16.3157 9.00187 11.172 14.8475 11.3912 21.3653C10.8832 20.5281 10.3558 19.7038 9.80861 18.8938C9.78901 18.852 9.76286 18.8129 9.72995 18.7785C8.80414 17.415 8.47449 17.0167 8.46161 16.9738C8.23488 16.2204 8.2345 15.4396 8.46031 14.7157C8.53156 14.4874 8.40422 14.2445 8.17587 14.1732C7.94752 14.102 7.70471 14.2293 7.63341 14.4577C7.51577 14.8349 7.44843 15.224 7.4304 15.6173C6.60967 14.5637 5.75522 13.5392 4.86839 12.5474C4.70901 12.3691 4.43508 12.3537 4.25685 12.5132C4.07852 12.6726 4.0632 12.9464 4.22264 13.1247C5.62404 14.692 6.94376 16.3417 8.17468 18.0612C7.47593 17.8964 6.76873 17.9219 6.09228 18.1309C5.86371 18.2015 5.73568 18.444 5.80627 18.6726C5.87681 18.9011 6.11962 19.0292 6.34786 18.9585C7.29809 18.665 8.25973 18.8521 9.09486 19.3844C10.0111 20.7411 10.8728 22.1377 11.6758 23.5695C11.7949 24.0938 11.9512 24.6129 12.1427 25.1263C4.5747 24.8724 -0.436386 17.2822 1.89656 10.3499C2.03326 9.94364 2.40838 9.69077 2.80959 9.70192C5.76372 9.77333 8.52187 10.9928 10.5757 13.1357C10.7413 13.3083 11.0154 13.3142 11.1881 13.1486C11.3608 12.9831 11.3666 12.709 11.2011 12.5362C8.98772 10.2271 6.01503 8.91292 2.83055 8.83588C2.01523 8.81845 1.32547 9.33119 1.07562 10.0735C-1.56597 17.9228 4.4766 26.3177 13.0166 25.9907C13.3462 25.9781 13.5396 25.616 13.3718 25.3367C14.4339 23.2817 15.6133 21.2948 16.902 19.3865C17.7273 18.8594 18.6899 18.6612 19.6523 18.9585C19.8806 19.0293 20.1233 18.901 20.1939 18.6725C20.2645 18.4439 20.1364 18.2015 19.9079 18.1309C19.2287 17.921 18.5217 17.8968 17.823 18.062C19.0523 16.345 20.3721 14.6963 21.7774 13.1247C21.9368 12.9464 21.9216 12.6726 21.7432 12.5132C21.565 12.3538 21.2911 12.3691 21.1317 12.5474C20.2436 13.5407 19.3893 14.5643 18.5696 15.616C18.5515 15.2232 18.4842 14.8344 18.3667 14.4577C18.2955 14.2294 18.0528 14.1018 17.8242 14.1732C17.5959 14.2444 17.4685 14.4874 17.5398 14.7157C17.7656 15.4396 17.7652 16.2204 17.5385 16.9738C17.5073 17.0788 15.2668 19.8833 12.8361 24.4913C10.4094 17.3206 15.7716 9.88138 23.1904 9.70192C23.6043 9.69012 23.9697 9.95236 24.1035 10.3499C26.2537 16.7391 22.2215 23.3592 16.0788 24.8285C15.8462 24.8841 15.7027 25.1179 15.7584 25.3505C15.814 25.5831 16.0476 25.7263 16.2804 25.6709C23.0196 24.0589 27.2028 16.8438 24.9244 10.0736Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_1862_4470">
        <rect width="26" height="26" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);
export default NutritionIcon;