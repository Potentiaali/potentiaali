import React, { useState } from "react"
import useTranslation from "next-translate/useTranslation"
import { useSelector } from "react-redux"
import Link from "next/link"
import { BoothBadge } from "../components/partials/badges/BoothBadge"

const CompanyPage = () => {
  const companies = useSelector((state) => state.company.companies)
  const [inputText, setInputText] = useState("")
  return (
    <>
      <section className="app-section">
        <h1>
          <Localized id="companies-title-text">Companies</Localized>
        </h1>
      </section>
      <section className="app-section">
        <input
          className="all-companies-filter"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Search..."
        />
      </section>
      <section className="app-section">
        <div className="all-companies-list">
          {[...companies.sort((a, b) => a.name.localeCompare(b.name))]
            .filter((company) =>
              company.name.toLowerCase().includes(inputText.toLowerCase())
            )
            .map((company) => (
              <Link href={"/company/" + company.id} key={company.id}>
                <div className="all-companies-list--company">
                  <BoothBadge name={company.booth} />{" "}
                  <span className="all-companies-list--company-name">
                    {company.shorter ? company.shorter : company.name}
                  </span>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </>
  )
}

export default CompanyPage
