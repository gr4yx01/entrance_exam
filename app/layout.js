'use client'
import "./globals.css";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CookiesProvider, useCookies } from "react-cookie";
import { SWRConfig } from 'swr';
import { unstable_serialize } from 'swr' 
import { unstable_serialize as infinite_unstable_serialize } from 'swr/infinite'
import { parseCookies } from 'nookies'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import { isTokenExpired } from "@/helper/auth";


export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${parseCookies().access_token}` || ''
  },
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = parseCookies().access_token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const fetcher = async (url) => {
  return await axiosInstance.get(url).then((response) => response.data);
};

export default function RootLayout({ children }) {
  const [cookie, __, removeCookie] = useCookies(['access_token', 'role'])
  const router = useRouter()

  useEffect(() => {
    if(cookie?.access_token) {
      if(cookie?.role === 'STUDENT') {
        router.push('/user')
      }else if (cookie?.role === 'ADMIN') {
        router.push('/admin')
      }
    }
  }, [])

  // useEffect(() => {
  //   if(isTokenExpired(parseCookies().access_token)) {
  //     document.cookie = "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
  //     document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
  //   }
  // }, [])

  return (
    <html className={``}>
    <body className="">
      <CookiesProvider>
        <main className="">
          <SWRConfig
            value={{
              fetcher,
              refreshInterval: 3000, // Automatically refresh the data every 5 seconds
              revalidateOnFocus: true, // Revalidate when the window gains focus
            }}
          >
              {children}
          </SWRConfig>  
        </main> {/* Wrap children in a main tag for semantic structure */}
      </CookiesProvider>
      <ToastContainer />
    </body>
  </html>
  );
}