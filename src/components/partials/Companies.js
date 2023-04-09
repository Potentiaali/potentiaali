import React from "react"
import companies from "../../data/companies.json"
import style from "./Companies.module.scss"
import Link from "next/link"
import useTranslation from "next-translate/useTranslation"

const Companies = () => {
  const { t } = useTranslation()
  return (
    <>
      <p>{t("companies-title-text")}</p>
      <br />
      <Link href="/companies">
        <p>{t("view-all-companies")}</p>
      </Link>
      <div className={style.companies}>
        {companies
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((company) => (
            <Link
              className={style["company-logo"]}
              key={company.name}
              href={"/company/" + company.id}
            >
              <img
                className={style["company-logo-image"]}
                alt={`${company.name} logo`}
                src={company.imgSrc}
              />
            </Link>
          ))}
      </div>
    </>
  )
}
export default Companies
