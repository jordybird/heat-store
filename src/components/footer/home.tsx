"use client"

import React from "react"
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const Footer = () => {
  // Define footer sections with link labels.
  const sections = [
    {
      title: "BRAND",
      links: ["PRODUCT CATALOG", "BLOG", "CAREERS"],
    },
    {
      title: "ABOUT US",
      links: ["ABOUT US", "TERMS OF USE", "PRIVACY POLICY"],
    },
    {
      title: "PROJECTS",
      links: ["SOCIAL IMPACT"],
    },
    {
      title: "STORES",
      links: ["STORE LOCATOR", "SHOP"],
    },
  ]

  return (
    <footer className="w-full bg-background text-foreground pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold mb-6">{section.title}</h2>
              <Separator className="mb-4 bg-foreground/30 dark:bg-white/20" />
              <ul className="space-y-4">
                {section.links.map((label) => {
                  // For the "BLOG" label, route to /blog; otherwise, use a placeholder "#"
                  const href = label === "BLOG" ? "/blog" : "#"
                  return (
                    <li key={label}>
                      <Link
                        href={href}
                        className="hover:text-primary transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">FIND HIGHER UP ON SOCIAL:</h2>
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              aria-label="Thread"
              className="hover:text-primary transition-colors"
            >
              <span className="text-2xl font-semibold">𝕏</span>
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-primary transition-colors"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="hover:text-primary transition-colors"
            >
              <Instagram size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Full-width Separator */}
      <Separator className="w-full bg-foreground/20 mb-6" />

      {/* Footer Legal + Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 md:px-0 text-xs text-gray-400 space-y-3">
        <p>
          <Link href="#" className="underline">
            PRIVACY
          </Link>{" "}
          AND{" "}
          <Link href="#" className="underline">
            TERMS
          </Link>
        </p>
        <p>COPYRIGHT © 2025 · ALL RIGHTS RESERVED.</p>

        <div className="space-y-3 mt-6">
          <p className="uppercase">FDA Disclaimer:</p>
          <p>
            THE STATEMENTS MADE REGARDING THESE PRODUCTS HAVE NOT BEEN EVALUATED BY THE FOOD AND
            DRUG ADMINISTRATION.
          </p>
          <p>
            THE EFFICACY OF THESE PRODUCTS HAS NOT BEEN CONFIRMED BY FDA-APPROVED RESEARCH. THESE
            PRODUCTS ARE NOT INTENDED TO DIAGNOSE, TREAT, CURE OR PREVENT ANY DISEASE. ALL
            INFORMATION PRESENTED HERE IS NOT MEANT AS A SUBSTITUTE FOR OR ALTERNATIVE TO
            INFORMATION FROM HEALTH CARE PRACTITIONERS. PLEASE CONSULT YOUR HEALTH CARE
            PROFESSIONAL ABOUT POTENTIAL INTERACTIONS OR OTHER POSSIBLE COMPLICATIONS BEFORE USING
            ANY PRODUCT. THE FEDERAL FOOD, DRUG, AND COSMETIC ACT REQUIRE THIS NOTICE.
          </p>
          <p className="mt-4">
            CANNABIS AND MARIJUANA ARE FOR USE ONLY BY PERSONS 21 YEARS OF AGE OR OLDER. SUCH USE
            MAY BE PROHIBITED IN YOUR LOCATION. THE STATEMENTS ON THIS WEBSITE HAVE NOT BEEN
            EVALUATED BY THE FDA. PRODUCTS SOLD OR ADVERTISED ON THIS WEBSITE ARE NOT INTENDED TO
            DIAGNOSE, TREAT, CURE, OR PREVENT ANY DISEASE.
          </p>
          <p className="mt-4">INDUSTRIAL COURT LTI, LLC CH-18-0000088-TEMP</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
