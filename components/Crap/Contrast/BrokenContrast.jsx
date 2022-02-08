import Heading2 from "../../Heading2";
import Text from "../../Text"
import styles from '../../../styles/Contrast.module.css'

const BrokenContrast = () => {
    return (
        <div>
            <div style={{color:'#E6B31E26'}} className={styles.element}>
                <Heading2  content='Color'/>
                <div className={styles.colorText}>
                    <div>
                        <Text content='Color contrast is one of the most fundamental design principles that most of us are familiar with. Even so, its application can still prove to be tricky in some cases.'/>
                        <Text content='As a thumb-rule, high contrast is required between the text and the background colors. However, having contrasting colors for multiple elements can make a design look messy sometimes.'/>
                    </div>
                    <img className={styles.colorImg} src='/colorsBroken.png'/>
                </div>
                <Text content='Moreover, contrast is not just about using complementary colors but you must also ensure that participating colors in a design don’t strain users’ eyes.'/>
            </div>
            <div className={styles.element}>
                <Text content='Size'/>
                <div className={styles.colorText}>
                    <div>
                        <Text content='Contrast can be maintained between discrete elements, especially text, using different sizes.'/>
                        <Text content='To draw users’ attention towards a certain element, keep its size significantly larger than the surrounding elements.'/>
                    </div>
                    <div className={styles.sizeText}>
                        <Text content='Heading 1'/>
                        <Text content='Heading 2'/>
                        <Text content='paragraph'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrokenContrast;