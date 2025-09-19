import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardHeader1 from "../about/CardHeader1";
import FadeInWithExpantion from "../animations/FadeInWithExpantion";

interface IProps {
  certificate: {
    id: number;
    imageSrc: string;
    title: string;
    origin: string;
    year: string;
    description: string;
  };
}

export default function CertificateCard({ certificate }: IProps) {
  return (
    <FadeInWithExpantion>
      <Card className="  bg-gray-900 dark:bg-gray-800 text-gray-900 h-full dark:text-gray-100 shadow-lg shadow-indigo-700/50 border border-gray-300 dark:border-gray-700">
        <CardHeader>
          <CardTitle>
            <CardHeader1
              text={certificate.title}
              customStyle="text-lg sm:text-xl lg:text-2xl mb-4 lg:mb-6 "
            />
          </CardTitle>
          <CardDescription>{certificate.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="img h-[400px] mb-6">
            <img
              src={certificate.imageSrc}
              alt={certificate.title}
              className="w-full object-fit  h-full rounded-md shadow-lg shadow-indigo-700 border-8 border-gray-300 dark:border-gray-700"
            />
          </div>
        </CardContent>
      </Card>
    </FadeInWithExpantion>
  );
}
