import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Loading = () => {
  return (
    <div className="full-page center">
      <FontAwesomeIcon icon={["far", "snowflake"]} size="2xl" fade />
      <h3>Loading...</h3>
    </div>
  )
}