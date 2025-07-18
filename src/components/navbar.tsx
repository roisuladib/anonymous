import NextLink from 'next/link';
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from '@heroui/navbar';
import { Link } from '@heroui/link';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Kbd } from '@heroui/kbd';
import { cn } from '@heroui/theme';
import { link as linkStyles } from '@heroui/theme';

import { siteConfig } from '^/config';

import { DiscordIcon, GithubIcon, HeartFilledIcon, Logo, SearchIcon, TwitterIcon } from './icons';
import { ThemeSwitch } from './theme-switch';

export default function Navbar() {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-xs',
      }}
      endContent={
        <Kbd
          className="hidden lg:inline-block"
          keys={['command']}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-default-400 pointer-events-none flex-shrink-0 text-base" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar maxWidth="xl">
      <NavbarContent>
        <NavbarBrand
          as="li"
          className="max-w-fit">
          <NextLink
            className="flex items-center gap-1"
            href="/">
            <Logo />
            <p className="font-bold text-inherit">ANONYMOUS</p>
          </NextLink>
        </NavbarBrand>
        <ul className="ml-2 flex items-center gap-4 max-lg:hidden">
          {siteConfig.navItems.map(e => (
            <NavbarItem key={e.href}>
              <NextLink
                className={cn(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium',
                )}
                color="foreground"
                href={e.href}>
                {e.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="max-sm:hidden"
        justify="end">
        <NavbarItem className="flex gap-2">
          <Link
            isExternal
            aria-label="Twitter"
            href="#">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link
            isExternal
            aria-label="Discord"
            href="#">
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link
            isExternal
            aria-label="Github"
            href="#">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="max-lg:hidden">{searchInput}</NavbarItem>
        <NavbarItem className="max-md:hidden">
          <Button
            isExternal
            as={Link}
            className="bg-default-100 text-default-600 text-sm font-normal"
            href="/"
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat">
            Sponsor
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="basis-1 pl-4 sm:hidden"
        justify="end">
        <Link
          isExternal
          aria-label="Github"
          href="#">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>{searchInput}</NavbarMenu>
    </HeroUINavbar>
  );
}
