import localFont from 'next/font/local'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Urbanist } from 'next/font/google'

export const urbanist = Urbanist({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700'], // Add the weights you need
    variable: '--font-urbanist', // Add this to enable CSS variable
});