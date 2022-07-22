import { FC } from 'react';

export interface NavHeader {
  onBack: () => void;
}

const NavHeader: FC<NavHeader> = ({ onBack }) => {
  return (
    <nav className="w-full bg-violet-500 px-2 py-2">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="url(#paint0_linear_4_1752)"
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
          ></path>
          <path
            fill="url(#paint1_linear_4_1752)"
            d="M11.102 17.56c3.781 0 6.846-3.035 6.846-6.779 0-3.743-3.065-6.778-6.846-6.778s-6.847 3.035-6.847 6.778c0 3.744 3.066 6.778 6.847 6.778z"
          ></path>
          <path
            fill="#2B3990"
            d="M18.17 10.217a5.39 5.39 0 00-.227-1.418 7.767 7.767 0 00-.837-1.83 6.32 6.32 0 00-1.508-1.599c-1.231-.985-2.433-1.355-4.036-1.51-1.934-.19-4.174.628-5.444 1.91a6.902 6.902 0 00-1.97 3.89 7.047 7.047 0 00.667 4.461c.114.254.266.489.45.698.065.068.213.058.322.082-.014-.109-.024-.214-.043-.32 0-.026-.037-.048-.055-.071a5.211 5.211 0 01-1.017-2.692 7.462 7.462 0 01.23-2.816c.26-.96.722-1.853 1.355-2.62.316-.348.67-.66 1.056-.927a7.013 7.013 0 012.378-1.08 6.667 6.667 0 012.837-.027 6.622 6.622 0 014.804 3.476c.405.77.661 1.608.756 2.473a4.181 4.181 0 01-.066.47l.13.02c.047-.152.226-.417.218-.57z"
          ></path>
          <path
            fill="#2B3990"
            d="M21.23 15.79a4.49 4.49 0 01-1.95 1.849 19.914 19.914 0 01-4.332 1.73c-1.28.355-2.61.49-3.936.399-.145-.014-.203.04-.29.15-.231.321-.497.615-.793.877-.48.386-.938.145-1.32-.238a.439.439 0 01-.072-.309c.053-.262.195-.498.402-.668.044-.045.105-.084.153-.132-2.858-1.051-4.573-3.252-5.148-6.033-.28.032-.484.082-.745.095a3.006 3.006 0 01-1.46-.264 1.901 1.901 0 01-.656-.528c-.28-.365-.31-.922.37-1.168a3.115 3.115 0 012.686.233c.141.104.27.225.383.359h.021a1.725 1.725 0 011.334-.777 5.02 5.02 0 011.936.016.462.462 0 01.391.468 1.057 1.057 0 01-.42.898c-.544.433-.98.48-1.7.555-.122 0-.344.029-.505.034.01.146.052.288.121.417.47.753 1.11 1.276 2.034 1.207a5.282 5.282 0 001.524-.375 15.415 15.415 0 003.038-1.696c.89-.612 1.77-1.236 2.662-1.849a5.668 5.668 0 012.81-.945c1.586-.111 2.595.726 3.326 2.007.306.507.5 1.074.568 1.662a3.564 3.564 0 01-.433 2.026z"
          ></path>
          <path
            fill="url(#paint2_linear_4_1752)"
            d="M19.62 10.994a2.308 2.308 0 00-1.19-.478 5.137 5.137 0 00-2.928.7c-.56.319-1.1.671-1.616 1.056a28.894 28.894 0 01-4.131 2.505 6.056 6.056 0 01-1.76.549c-.302.039-.608.03-.908-.027-.724-.137-1.178-.647-1.558-1.233-.16-.24-.252-.52-.265-.808-.015-.264.048-.336.315-.349h.43a2.966 2.966 0 001.685-.579.594.594 0 00.246-.377c-.076-.132-.143-.159-.343-.227l-.212-.035a4.44 4.44 0 00-1.656.116 1.681 1.681 0 00-1.143.73c-.027.042-.067.079-.114.15-.36-.613-.956-.758-1.585-.832-.629-.074-1.585.048-1.677.33-.053.182.311.51.586.605.325.126.664.215 1.01.264.38.021.762.021 1.143 0a.23.23 0 01.185.1c.108.312.182.637.293.946a7.776 7.776 0 001.057 2.185c.322.415.67.809 1.043 1.18a6.075 6.075 0 002.943 1.636c.09.032.179.07.264.116-.052.1-.12.189-.204.264-.037.029-.087.084-.121.113-.15.122-.243.243-.389.373-.219.19-.2.317.056.454a.753.753 0 00.943-.171c.22-.221.423-.457.61-.706a.36.36 0 01.36-.166c1.409.094 2.823-.076 4.17-.502a25.136 25.136 0 002.412-.885 10.226 10.226 0 002.377-1.255c1.038-.77 1.614-1.989 1.279-3.29a4.408 4.408 0 00-1.607-2.452zM8.998 18.39c-.846-.206-1.435-.647-2.071-1.178-.077-.064-.172-.135-.085-.24.087-.106.188-.053.264 0 .148.113.291.235.436.354.449.368.97.638 1.53.792.098.02.185.077.243.158.037.085-.127.162-.317.117v-.003zm-.457-1.32c-.122-.212.074-.265.227-.17.267.147.556.25.856.301.119.02.235.058.343.111a.132.132 0 01-.029.14.328.328 0 01-.203.03 3.066 3.066 0 01-1.194-.41v-.003zm4.947 1.713c-.293.045-.6.117-.893.143a7.532 7.532 0 01-2.417-.23.745.745 0 01-.232-.095.266.266 0 01-.066-.058.161.161 0 01-.024-.1.132.132 0 01.037-.061.266.266 0 01.106-.04.426.426 0 01.209.032 6.537 6.537 0 003.399.082.133.133 0 01.056 0l.052.056a.264.264 0 01-.227.274v-.003zm.85-.49c-.076-.19.04-.265.18-.3.291-.062.572-.167.832-.31.098-.059.135-.07.249-.128.155.04.142.18-.056.315a3.114 3.114 0 01-1.204.425v-.003zm2.077-1.266c-.37-.047-.563-.512-.6-.827a.59.59 0 01.59-.618c.409-.018.67.42.691.85a.597.597 0 01-.681.595z"
          ></path>
          <path
            fill="#2B3990"
            d="M12.277 17.98c.048 0 .228 0 .23-.172-.018-.088-.158-.082-.216-.072a3.636 3.636 0 01-.967-.029c-.064 0-.161-.021-.18.106 0 .02 0 .069.019.092.361.107.742.133 1.114.074zM6.036 15.812c-.138.07-.146.147-.069.264.1.154.22.296.354.422.029.03.1 0 .137 0a.103.103 0 000-.148 3.607 3.607 0 01-.422-.539z"
          ></path>
          <path
            fill="#fff"
            d="M16.094 16.234c.031.174.107.337.22.473a.311.311 0 00.37 0 26.112 26.112 0 01-.365-.792.263.263 0 00-.225.32z"
          ></path>
          <path
            fill="#2B3990"
            d="M15.69 12.872a.529.529 0 00-.203-.023 7.2 7.2 0 00.156-.772.42.42 0 00-.391-.528l-.722-.04v-.06l-.427-1.29.565-.393.222-.158c.51-.265.528-.415.528-.49a.325.325 0 00-.087-.136c0-.041-.01-.08-.03-.117a.355.355 0 00-.065-.097 2.5 2.5 0 00.235-.138.09.09 0 00-.098-.148c-.06.027-.264.109-.433.204-.116.063-.306.158-.425.222l-.896.494a.883.883 0 00-.11-.085l-.112-.39c-.203-.704-.871-1.131-1.484-.954-.613.177-.954.895-.753 1.584l.116.402a.9.9 0 00-.108.792l.37 1.421a1.1 1.1 0 00.755.832c.335-.002.667-.062.98-.18.328-.076.645-.197.94-.358a.437.437 0 00.072-.05l.34.015s-.116.71-.116.803a.264.264 0 00.249.264c.058 0 .546 0 .71-.02a.295.295 0 00.317-.312c.01-.206-.018-.246-.095-.294z"
          ></path>
          <path
            fill="#fff"
            d="M12.41 9.279a.098.098 0 01-.122-.064l-.048-.153a.097.097 0 01.006-.073.094.094 0 01.093-.051.096.096 0 01.084.066l.05.153a.097.097 0 01-.064.122zM13.009 8.946a.098.098 0 01-.122-.063l-.047-.153a.097.097 0 010-.08.098.098 0 01.1-.058.098.098 0 01.085.08l.047.153a.1.1 0 01-.063.121z"
          ></path>
          <path
            fill="#2B3990"
            d="M13.318 17.308c-.216-.122-.069-.265.106-.265.303-.01.603-.071.887-.18.112-.045.23-.073.352-.084.029 0 .066.095.047.135a.343.343 0 01-.158.132c-.39.17-.81.26-1.234.262zM20.698 16.063a5.377 5.377 0 01-2.67.727 1.219 1.219 0 00-.333.058.248.248 0 00-.108.084.326.326 0 00-.035.077c0 .026.009.052.024.074a.266.266 0 00.203.08h.355a4.783 4.783 0 001.96-.476l.604-.624z"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_4_1752"
              x1="0.721"
              x2="23.276"
              y1="16.105"
              y2="7.895"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7A2A90"></stop>
              <stop offset="1" stopColor="#F27293"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_4_1752"
              x1="4.255"
              x2="17.948"
              y1="10.781"
              y2="10.781"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF40B4"></stop>
              <stop offset="0.5" stopColor="#F19E72"></stop>
              <stop offset="0.6" stopColor="#F2AC63"></stop>
              <stop offset="0.8" stopColor="#F4C548"></stop>
              <stop offset="0.92" stopColor="#F5CE3E"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_4_1752"
              x1="1.218"
              x2="21.345"
              y1="15.484"
              y2="15.484"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A7E4"></stop>
              <stop offset="0.24" stopColor="#38B3BC"></stop>
              <stop offset="0.78" stopColor="#C5D158"></stop>
              <stop offset="1" stopColor="#FFDE2F"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="py-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
          className="flex text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>BACK</span>
        </a>
      </div>
    </nav>
  );
};

export default NavHeader;
