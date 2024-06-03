'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search(handler: any) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Recipe Finder</h1>
            <input
                type="text"
                placeholder="Search Recipes"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-600"
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
            />
        </>
    )
}