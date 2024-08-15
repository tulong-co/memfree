import React from 'react';
import { generateId } from 'ai';
import { SearchWindow } from '@/components/search/SearchWindow';
import { SimpleSiteFooter } from '@/components/layout/simple-site-footer';
import { getCurrentUser } from '@/lib/session';
import { HeroLanding } from '@/components/layout/hero-landing';

export default async function IndexPage() {
    const id = generateId();
    const user = await getCurrentUser();

    return (
        <div className="group mx-auto overflow-auto peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]">
            <HeroLanding />
            <SearchWindow id={id} user={user} initialMessages={[]} />
            <SimpleSiteFooter />
        </div>
    );
}