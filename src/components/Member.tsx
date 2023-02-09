import styles from "@/styles/Member.module.css"

const Member = ({ member }: any) => {
  return (
    <div className={styles.member}>
      <p>
        {member.name_first + " " + member.name_father} - {member.phone_mobile}
      </p>
      <p>
        {member.school_or_organization} - {member.id_document}{" "}
        {member.id_number}
      </p>
    </div>
  )
}

export default Member
