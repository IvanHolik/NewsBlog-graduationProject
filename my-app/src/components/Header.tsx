import { createContext, useState } from "react"
import { getInputSearch } from "../store/inputSlice"
import { useAppDispatch } from "../store/store"

export const Header: React.FC = () => {

    const [inputValue, setInputValue] = useState('')
    const dispatch = useAppDispatch()
    const sendInputSearch = () => {
        dispatch(getInputSearch(inputValue))
    }
    return (
        <div className="py-0 px-4 flex gap-3 bg-custom-color mb-[72px]">
            <a href="#" className="self-center">
                <svg width="167" height="56" viewBox="0 0 167 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 4.66667C0 2.08934 2.08934 0 4.66667 0L160.905 0C163.978 0 166.212 2.91767 165.41 5.88378L152.803 52.5504C152.253 54.586 150.406 56 148.298 56H4.66667C2.08934 56 0 53.9107 0 51.3333V4.66667Z" fill="url(#paint0_linear_2_2118)" />
                    <path d="M14.3669 35.1665V21.5907H20.0279C21.0443 21.5907 21.895 21.7344 22.58 22.0216C23.2694 22.3089 23.7864 22.711 24.1311 23.2281C24.4803 23.7451 24.6548 24.3439 24.6548 25.0245C24.6548 25.5415 24.5465 26.0033 24.33 26.4099C24.1135 26.812 23.8152 27.1457 23.4351 27.4108C23.0551 27.676 22.6154 27.8616 22.116 27.9676V28.1002C22.664 28.1267 23.17 28.2748 23.634 28.5443C24.1024 28.8139 24.478 29.1895 24.7609 29.6712C25.0437 30.1485 25.1851 30.7142 25.1851 31.3682C25.1851 32.0974 24.9995 32.7492 24.6283 33.3237C24.2571 33.8938 23.7202 34.3445 23.0175 34.676C22.3148 35.003 21.4619 35.1665 20.4588 35.1665H14.3669ZM17.6482 32.5216H19.6766C20.3881 32.5216 20.9118 32.3868 21.2476 32.1173C21.5879 31.8477 21.758 31.4721 21.758 30.9904C21.758 30.6412 21.6763 30.3407 21.5128 30.0888C21.3493 29.8325 21.1172 29.6359 20.8167 29.4989C20.5162 29.3575 20.1561 29.2868 19.7362 29.2868H17.6482V32.5216ZM17.6482 27.1722H19.4645C19.8224 27.1722 20.1406 27.1125 20.419 26.9932C20.6974 26.8739 20.914 26.7015 21.0686 26.4762C21.2277 26.2508 21.3073 25.979 21.3073 25.6608C21.3073 25.2056 21.146 24.8477 20.8234 24.587C20.5008 24.3262 20.0655 24.1959 19.5175 24.1959H17.6482V27.1722ZM27.3228 35.1665V21.5907H30.604V32.5017H36.2518V35.1665H27.3228ZM50.7952 28.3786C50.7952 29.8723 50.5079 31.1384 49.9334 32.1769C49.3589 33.2154 48.5812 34.0043 47.6001 34.5434C46.6235 35.0825 45.5275 35.3521 44.3122 35.3521C43.0925 35.3521 41.9944 35.0803 41.0177 34.5368C40.0411 33.9932 39.2655 33.2044 38.691 32.1703C38.1209 31.1318 37.8359 29.8679 37.8359 28.3786C37.8359 26.8849 38.1209 25.6188 38.691 24.5803C39.2655 23.5418 40.0411 22.753 41.0177 22.2138C41.9944 21.6747 43.0925 21.4051 44.3122 21.4051C45.5275 21.4051 46.6235 21.6747 47.6001 22.2138C48.5812 22.753 49.3589 23.5418 49.9334 24.5803C50.5079 25.6188 50.7952 26.8849 50.7952 28.3786ZM47.441 28.3786C47.441 27.4948 47.3151 26.7479 47.0632 26.1381C46.8157 25.5282 46.4577 25.0664 45.9893 24.7527C45.5253 24.4389 44.9663 24.282 44.3122 24.282C43.6626 24.282 43.1036 24.4389 42.6351 24.7527C42.1667 25.0664 41.8065 25.5282 41.5547 26.1381C41.3072 26.7479 41.1834 27.4948 41.1834 28.3786C41.1834 29.2625 41.3072 30.0093 41.5547 30.6192C41.8065 31.229 42.1667 31.6908 42.6351 32.0046C43.1036 32.3183 43.6626 32.4752 44.3122 32.4752C44.9663 32.4752 45.5253 32.3183 45.9893 32.0046C46.4577 31.6908 46.8157 31.229 47.0632 30.6192C47.3151 30.0093 47.441 29.2625 47.441 28.3786ZM62.18 26.0254C62.1049 25.747 61.9944 25.5017 61.8486 25.2896C61.7027 25.0731 61.5238 24.8897 61.3116 24.7394C61.0995 24.5892 60.8565 24.4765 60.5825 24.4013C60.3085 24.3218 60.008 24.282 59.6809 24.282C59.0225 24.282 58.4524 24.4411 57.9707 24.7593C57.4934 25.0775 57.1244 25.5415 56.8637 26.1513C56.603 26.7568 56.4726 27.4926 56.4726 28.3587C56.4726 29.2293 56.5986 29.9717 56.8505 30.586C57.1023 31.2003 57.4669 31.6687 57.9442 31.9913C58.4215 32.3139 59.0004 32.4752 59.6809 32.4752C60.282 32.4752 60.7902 32.378 61.2056 32.1835C61.6254 31.9847 61.9436 31.7041 62.1601 31.3417C62.3767 30.9793 62.4849 30.5529 62.4849 30.0623L63.0948 30.1353H59.7936V27.7423H65.6469V29.5387C65.6469 30.7539 65.3883 31.7947 64.8713 32.6608C64.3587 33.527 63.6516 34.1921 62.7501 34.6561C61.853 35.1201 60.8211 35.3521 59.6544 35.3521C58.3596 35.3521 57.2217 35.0715 56.2406 34.5103C55.2595 33.949 54.495 33.1491 53.947 32.1106C53.3991 31.0677 53.1251 29.8303 53.1251 28.3985C53.1251 27.2849 53.2908 26.2972 53.6222 25.4354C53.9537 24.5693 54.4155 23.8357 55.0076 23.2347C55.6042 22.6337 56.2936 22.1785 57.0758 21.8691C57.8624 21.5598 58.7087 21.4051 59.6147 21.4051C60.4013 21.4051 61.1327 21.5178 61.8088 21.7432C62.4893 21.9686 63.0904 22.2868 63.6118 22.6977C64.1377 23.1087 64.5642 23.5971 64.8912 24.1627C65.2182 24.7284 65.4215 25.3493 65.501 26.0254H62.18ZM80.9543 28.3786C80.9543 29.8723 80.667 31.1384 80.0925 32.1769C79.518 33.2154 78.7402 34.0043 77.7592 34.5434C76.7825 35.0825 75.6866 35.3521 74.4713 35.3521C73.2516 35.3521 72.1534 35.0803 71.1768 34.5368C70.2001 33.9932 69.4246 33.2044 68.8501 32.1703C68.28 31.1318 67.995 29.8679 67.995 28.3786C67.995 26.8849 68.28 25.6188 68.8501 24.5803C69.4246 23.5418 70.2001 22.753 71.1768 22.2138C72.1534 21.6747 73.2516 21.4051 74.4713 21.4051C75.6866 21.4051 76.7825 21.6747 77.7592 22.2138C78.7402 22.753 79.518 23.5418 80.0925 24.5803C80.667 25.6188 80.9543 26.8849 80.9543 28.3786ZM77.6001 28.3786C77.6001 27.4948 77.4741 26.7479 77.2222 26.1381C76.9748 25.5282 76.6168 25.0664 76.1484 24.7527C75.6844 24.4389 75.1253 24.282 74.4713 24.282C73.8217 24.282 73.2627 24.4389 72.7942 24.7527C72.3258 25.0664 71.9656 25.5282 71.7137 26.1381C71.4662 26.7479 71.3425 27.4948 71.3425 28.3786C71.3425 29.2625 71.4662 30.0093 71.7137 30.6192C71.9656 31.229 72.3258 31.6908 72.7942 32.0046C73.2627 32.3183 73.8217 32.4752 74.4713 32.4752C75.1253 32.4752 75.6844 32.3183 76.1484 32.0046C76.6168 31.6908 76.9748 31.229 77.2222 30.6192C77.4741 30.0093 77.6001 29.2625 77.6001 28.3786ZM83.43 35.1665V21.5907H86.7112V32.5017H92.359V35.1665H83.43ZM106.902 28.3786C106.902 29.8723 106.615 31.1384 106.041 32.1769C105.466 33.2154 104.688 34.0043 103.707 34.5434C102.731 35.0825 101.635 35.3521 100.419 35.3521C99.1997 35.3521 98.1016 35.0803 97.1249 34.5368C96.1483 33.9932 95.3727 33.2044 94.7982 32.1703C94.2281 31.1318 93.9431 29.8679 93.9431 28.3786C93.9431 26.8849 94.2281 25.6188 94.7982 24.5803C95.3727 23.5418 96.1483 22.753 97.1249 22.2138C98.1016 21.6747 99.1997 21.4051 100.419 21.4051C101.635 21.4051 102.731 21.6747 103.707 22.2138C104.688 22.753 105.466 23.5418 106.041 24.5803C106.615 25.6188 106.902 26.8849 106.902 28.3786ZM103.548 28.3786C103.548 27.4948 103.422 26.7479 103.17 26.1381C102.923 25.5282 102.565 25.0664 102.097 24.7527C101.633 24.4389 101.073 24.282 100.419 24.282C99.7698 24.282 99.2108 24.4389 98.7424 24.7527C98.2739 25.0664 97.9138 25.5282 97.6619 26.1381C97.4144 26.7479 97.2906 27.4948 97.2906 28.3786C97.2906 29.2625 97.4144 30.0093 97.6619 30.6192C97.9138 31.229 98.2739 31.6908 98.7424 32.0046C99.2108 32.3183 99.7698 32.4752 100.419 32.4752C101.073 32.4752 101.633 32.3183 102.097 32.0046C102.565 31.6908 102.923 31.229 103.17 30.6192C103.422 30.0093 103.548 29.2625 103.548 28.3786ZM118.287 26.0254C118.212 25.747 118.102 25.5017 117.956 25.2896C117.81 25.0731 117.631 24.8897 117.419 24.7394C117.207 24.5892 116.964 24.4765 116.69 24.4013C116.416 24.3218 116.115 24.282 115.788 24.282C115.13 24.282 114.56 24.4411 114.078 24.7593C113.601 25.0775 113.232 25.5415 112.971 26.1513C112.71 26.7568 112.58 27.4926 112.58 28.3587C112.58 29.2293 112.706 29.9717 112.958 30.586C113.21 31.2003 113.574 31.6687 114.051 31.9913C114.529 32.3139 115.108 32.4752 115.788 32.4752C116.389 32.4752 116.897 32.378 117.313 32.1835C117.733 31.9847 118.051 31.7041 118.267 31.3417C118.484 30.9793 118.592 30.5529 118.592 30.0623L119.202 30.1353H115.901V27.7423H121.754V29.5387C121.754 30.7539 121.496 31.7947 120.979 32.6608C120.466 33.527 119.759 34.1921 118.857 34.6561C117.96 35.1201 116.928 35.3521 115.762 35.3521C114.467 35.3521 113.329 35.0715 112.348 34.5103C111.367 33.949 110.602 33.1491 110.054 32.1106C109.506 31.0677 109.232 29.8303 109.232 28.3985C109.232 27.2849 109.398 26.2972 109.729 25.4354C110.061 24.5693 110.523 23.8357 111.115 23.2347C111.711 22.6337 112.401 22.1785 113.183 21.8691C113.97 21.5598 114.816 21.4051 115.722 21.4051C116.508 21.4051 117.24 21.5178 117.916 21.7432C118.597 21.9686 119.198 22.2868 119.719 22.6977C120.245 23.1087 120.671 23.5971 120.998 24.1627C121.325 24.7284 121.529 25.3493 121.608 26.0254H118.287ZM137.061 28.3786C137.061 29.8723 136.774 31.1384 136.2 32.1769C135.625 33.2154 134.847 34.0043 133.866 34.5434C132.89 35.0825 131.794 35.3521 130.579 35.3521C129.359 35.3521 128.261 35.0803 127.284 34.5368C126.307 33.9932 125.532 33.2044 124.957 32.1703C124.387 31.1318 124.102 29.8679 124.102 28.3786C124.102 26.8849 124.387 25.6188 124.957 24.5803C125.532 23.5418 126.307 22.753 127.284 22.2138C128.261 21.6747 129.359 21.4051 130.579 21.4051C131.794 21.4051 132.89 21.6747 133.866 22.2138C134.847 22.753 135.625 23.5418 136.2 24.5803C136.774 25.6188 137.061 26.8849 137.061 28.3786ZM133.707 28.3786C133.707 27.4948 133.581 26.7479 133.329 26.1381C133.082 25.5282 132.724 25.0664 132.256 24.7527C131.792 24.4389 131.233 24.282 130.579 24.282C129.929 24.282 129.37 24.4389 128.901 24.7527C128.433 25.0664 128.073 25.5282 127.821 26.1381C127.573 26.7479 127.45 27.4948 127.45 28.3786C127.45 29.2625 127.573 30.0093 127.821 30.6192C128.073 31.229 128.433 31.6908 128.901 32.0046C129.37 32.3183 129.929 32.4752 130.579 32.4752C131.233 32.4752 131.792 32.3183 132.256 32.0046C132.724 31.6908 133.082 31.229 133.329 30.6192C133.581 30.0093 133.707 29.2625 133.707 28.3786Z" fill="white" />
                    <defs>
                        <linearGradient id="paint0_linear_2_2118" x1="-12.9669" y1="-6.64031" x2="32.5425" y2="111.545" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#002324" />
                            <stop offset="1" stop-color="#00facd" />
                        </linearGradient>
                    </defs>
                </svg>
            </a>
            <div className="flex items-center flex-grow justify-center">
                <div className="flex border-2 border-gray-600 rounded">
                    <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                           if(e.key === 'Enter') {
                            return sendInputSearch();
                           }
                        }}
                        id="search_input"
                        type="text"
                        className="px-4 py-2 w-80 bg-custom-color border-gray-600 rounded text-white"
                        placeholder="Search..."
                    />
                    <label htmlFor="search_input" className="flex items-center justify-center px-4 border-l cursor-pointer border-gray-600 rounded">
                        <button onClick={sendInputSearch}>
                        <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg>
                        </button>
                    </label>
                </div>
            </div>

            <div className="flex gap-x-4">
                <p className="text-white py-8">HI</p>
                <p className="text-white py-8">Holik Ivan</p>
            </div>
        </div>
    )
}