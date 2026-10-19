"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, ReadCvLogo, X } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { langList } from "@/lib/translate/langList";

export function ResumeLanguageModal() {
  const { t } = useTranslation();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label={t("resume.open")}
          title={t("resume.open")}
          className="cursor-pointer rounded-md bg-slate-900 p-1 text-white transition-colors hover:bg-teal-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
        >
          <ReadCvLogo size={40} aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-slate-950/75 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-[61] w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 max-h-[90dvh] overflow-y-auto p-2 focus:outline-none">
          <div className="mb-8 flex items-center justify-between gap-4 text-white">
            <Dialog.Title className="text-2xl font-bold sm:text-3xl">
              {t("resume.selectLanguage")}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button type="button" aria-label={t("resume.close")} className="cursor-pointer rounded-full p-2 transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white">
                <X size={24} aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Description className="sr-only">{t("resume.description")}</Dialog.Description>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {langList.map((language) => (
              <Dialog.Close asChild key={language.key}>
                <a
                  href={language.resumeUrl}
                  hrefLang={language.htmlLang}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t("resume.open")}: ${language.title} (${t("resume.newTab")})`}
                  className="group flex items-center gap-5 rounded-2xl bg-background p-6 text-slate-900 shadow-xl transition-transform hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-teal-400 motion-reduce:transform-none sm:min-h-56 sm:flex-col sm:justify-center sm:gap-6"
                >
                  <span className="block w-16 shrink-0 overflow-hidden rounded-md shadow-sm sm:w-20" aria-hidden="true">{language.icon}</span>
                  <span className="flex flex-1 flex-col gap-2 sm:flex-none sm:items-center">
                    <span className="text-lg font-bold" lang={language.htmlLang}>{language.title}</span>
                    <span className="flex items-center gap-2 text-sm text-slate-600">{t("resume.viewPdf")} <ArrowUpRight size={16} aria-hidden="true" /></span>
                  </span>
                </a>
              </Dialog.Close>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
