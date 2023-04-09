import React from "react"
import { useSelector } from "react-redux"
import useTranslation from "next-translate/useTranslation"
import Link from "next/link"
import { useRouter } from "next/router"
import LanguageString from "../../components/LanguageString"
import { BoothBadge } from "../../components/partials/badges/BoothBadge"

const SingleCompanyPage = () => {
  const companies = useSelector((state) => state.company.companies)
  let router = useRouter()
  const { t } = useTranslation()
  const companyId = router.query.slug
  if (!companyId) {
    return <span> {t("company-not-found")}</span>
  }
  if (companies.length === 0) {
    return <span> {t("empty-schedule")}</span>
  }
  const company = companies.find(
    (cmpny) => Number(cmpny.id) === Number(companyId)
  )
  if (company === undefined) {
    return <span> {t("company-not-found")}</span>
  }
  return (
    <>
      <section className="app-section">
        <Link href="" onClick={() => router.back()}>
          <h3>
            <i className="fas fa-chevron-left"></i>&nbsp;&nbsp;
            <span> {t("go-back")}</span>
          </h3>
        </Link>
      </section>
      <section className="app-section">
        <h1>{company.name}</h1>
        <p>
          <BoothBadge name={company.booth} />
        </p>
        <div
          style={{
            backgroundColor: "white",
            padding: 20,
            display: "inline-block"
          }}
        >
          <img alt={company.name} src={"/" + company.imgSrc} width={200} />
        </div>
        <p>
          <a
            href={company.websiteUrl}
            alt={company.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt"></i>&nbsp;&nbsp;
            {company.websiteUrl}
          </a>
        </p>
        <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          <p>
            <LanguageString languageObject={company.description} />
          </p>
        </pre>
      </section>
      <section className="app-section">
        <Link href="/companies">
          <h3>
            <span> {t("go-to-company-listing")}</span>
          </h3>
        </Link>
      </section>
    </>
  )
}

export default SingleCompanyPage
