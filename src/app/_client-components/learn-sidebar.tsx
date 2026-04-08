"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Collapsible } from "radix-ui";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarInset,
} from "@/components/ui/sidebar";
import { useStudyCategories } from "@/context/study-categories-context";
import type { StudyCategory } from "@/lib/study-categories";
import type { User } from "@/lib/user";

interface LearnSidebarProps {
    user: User;
    children: React.ReactNode;
}

function CategoryItem({ c, pathname }: { c: StudyCategory; pathname: string }) {
    const categorySlug = c.category.toLowerCase().replace(/\s+/g, "-");
    const categoryBase = `/study-categories/learn-category/${categorySlug}`;
    const isCategoryActive = pathname.startsWith(categoryBase);
    const [isOpen, setIsOpen] = useState(isCategoryActive);

    return (
        <Collapsible.Root
            open={isCategoryActive || isOpen}
            onOpenChange={setIsOpen}
            className="group/collapsible"
        >
            <SidebarMenuItem>
                <Collapsible.Trigger asChild>
                    <SidebarMenuButton
                        isActive={isCategoryActive}
                        className="data-active:bg-blue-100 data-active:text-blue-700 data-active:hover:bg-blue-200"
                    >
                        <span>{c.category}</span>
                        <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                </Collapsible.Trigger>

                <Collapsible.Content>
                    <SidebarMenuSub>
                        {c.subcategories.map((sub) => {
                            const subSlug = sub.toLowerCase().replace(/\s+/g, "-");
                            const href = `${categoryBase}/learn-sub-category/${subSlug}`;
                            return (
                                <SidebarMenuSubItem key={sub}>
                                    <SidebarMenuSubButton
                                        asChild
                                        isActive={pathname === href}
                                        className="hover:bg-blue-100 hover:text-blue-700 data-active:text-black"
                                    >
                                        <Link href={href}>{sub}</Link>
                                    </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                            );
                        })}
                    </SidebarMenuSub>
                </Collapsible.Content>
            </SidebarMenuItem>
        </Collapsible.Root>
    );
}

export default function LearnSidebar({ user, children }: LearnSidebarProps) {
    const categories = useStudyCategories();
    const pathname = usePathname();

    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader>
                    <p className="px-2 py-3 text-sm font-semibold leading-tight">
                        Your Study and Project Hub
                    </p>
                </SidebarHeader>

                <SidebarContent>
                    {/* Categories group */}
                    <SidebarGroup>
                        <SidebarGroupLabel>Categories</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {categories.map((c) => (
                                    <CategoryItem key={c.category} c={c} pathname={pathname} />
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>

                    {/* Projects group – populated later */}
                    <SidebarGroup>
                        <SidebarGroupLabel>Projects</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {/* TODO: populate with projects */}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>

                <SidebarFooter>
                    <div className="flex flex-row items-center gap-3 px-2 py-3">
                        <Image
                            src={user.profilePicPath}
                            alt="Profile picture"
                            width={36}
                            height={36}
                            className="rounded-full object-cover shrink-0"
                        />
                        <div className="flex flex-col overflow-hidden">
                            <span className="text-sm font-medium truncate">{user.username}</span>
                            <span className="text-xs text-muted-foreground truncate">{user.email}</span>
                        </div>
                    </div>
                </SidebarFooter>
            </Sidebar>

            <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
    );
}
