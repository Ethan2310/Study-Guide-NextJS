"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    SidebarProvider,
    SidebarInset,
} from "@/components/ui/sidebar";
import { useStudyCategories } from "@/context/study-categories-context";
import type { User } from "@/lib/user";

interface LearnSidebarProps {
    user: User;
    children: React.ReactNode;
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
                                {categories.map((c) => {
                                    const slug = c.category.toLowerCase().replace(/\s+/g, "-");
                                    const href = `/study-categories/learn-category/${slug}`;
                                    return (
                                        <SidebarMenuItem key={c.category}>
                                            <SidebarMenuButton asChild isActive={pathname === href}>
                                                <Link href={href}>
                                                    {c.category}
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    );
                                })}
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
